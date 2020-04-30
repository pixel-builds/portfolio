import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.sass'],
})
export class BlogDetailsComponent implements OnInit {
  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      console.log(params)
    })
   }

  ngOnInit() {
    this.blogService.getBlog('README').subscribe((data: any) => {
      console.log(atob(data.content))
    })
  }

}
