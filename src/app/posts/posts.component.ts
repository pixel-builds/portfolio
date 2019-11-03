import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
posts: any;
  constructor(private postService: PostService) { }

 ngOnInit() {
   this.postService.get().subscribe(data => {
     console.log(data);
   });
 }

}
