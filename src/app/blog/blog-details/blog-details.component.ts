import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.sass'],
})
export class BlogDetailsComponent implements OnInit {
  name: string;
  blog: any;
  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.name = params.name;
    })
   }

  ngOnInit() {
    this.blogService.getBlog(this.name).subscribe((data: any) => {
      const blog = atob(data.content);
      this.blog = this.blogService.convertMd(blog);
    })
  }

}
