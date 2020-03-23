import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './Post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit, OnDestroy {
posts: Post;
postSub: Subscription;
  constructor(private postService: PostService) { }

 ngOnInit() {
   this.postSub = this.postService.get().subscribe(data => {
     console.log(data);
   });
 }

 ngOnDestroy() {
  this.postSub.unsubscribe();
 }

}
