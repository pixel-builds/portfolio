import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog-details/Blog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit, OnDestroy {
blogs: Blog[];
blogsSub: Subscription;
  constructor(private blogService: BlogService,
     private router: Router) {
   }

  ngOnInit() {
    this.blogsSub = this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs.reverse();
    })
  }

  visitBlog(name: string) {
    return this.router.navigateByUrl('blogs/' + name)
  }

  ngOnDestroy() {
    this.blogsSub.unsubscribe()
  }

}
