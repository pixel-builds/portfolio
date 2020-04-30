import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog-details/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
blogs: Blog;
  constructor(private blogService: BlogService, private router: Router) {
   }

  ngOnInit() {
    this.blogService.getBlogs().subscribe((blogs: any) => {
      this.blogs = blogs;
    })
  }

  visitBlog(name: string) {
    return this.router.navigateByUrl('blogs/' + name)
  }

}
