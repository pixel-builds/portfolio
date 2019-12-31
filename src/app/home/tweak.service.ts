import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TweakService {
homepage: AngularFirestoreCollection;
tweakData$: any;
  constructor(
    private afs: AngularFirestore
  ) {
    this.homepage = this.afs.collection('tweak');
    this.tweakData$ = this.homepage.doc('homepage').valueChanges();
  }
}
