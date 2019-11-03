import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Post';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PostService {
postsCollection: AngularFirestoreCollection<Post>;
posts: Observable<any>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.postsCollection = this.afs.collection('posts');
   }

   get() {
    return this.postsCollection.valueChanges();
   }
}
