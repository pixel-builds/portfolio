import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { MyDetailsComponent } from './home/my-details/my-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'myinterests', component: MyDetailsComponent },
  { path: 'posts', component: PostsComponent },
  // { path: 'blogs', component: BlogComponent },
  // { path: 'blogs/:id', component: BlogDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
