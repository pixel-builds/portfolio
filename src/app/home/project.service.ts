import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
project: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) { 
    this.project = this.afs.collection('projects');
  }

  getProjects() {
    return this.project.valueChanges({idFeild: 'id'})
  }
}
