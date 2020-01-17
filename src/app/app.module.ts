import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { PostsComponent } from './posts/posts.component';
import { MyDetailsComponent } from './home/my-details/my-details.component';
import { LoadingComponent } from './loading/loading.component';
import {PostService} from './posts/post.service';
import {TweakService} from './home/tweak.service';
import { ProjectService } from './home/project.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    PostsComponent,
    MyDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [PostService, TweakService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
