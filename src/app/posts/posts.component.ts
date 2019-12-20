import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
posts: Post;
  constructor(private postService: PostService) { }

 ngOnInit() {
   this.postService.get().subscribe(data => {
     console.log(data);
   });
 }

}
