import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog-details/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
blogs: Blog;
  constructor(private blogService: BlogService) {
    console.log('lol')
   }

  ngOnInit() {
    this.blogService.getBlogs().subscribe((blogs: any) => {
      this.blogs = blogs;
    })
  }

}
