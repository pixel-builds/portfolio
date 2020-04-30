import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.sass'],
})
export class BlogDetailsComponent implements OnInit {
  text: SafeHtml;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.text = this.blogService.convertMd('# Helloworld!')
  }

}
