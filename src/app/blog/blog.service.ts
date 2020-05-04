import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import {
  DomSanitizer, SafeHtml
} from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import * as marked from 'marked';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private md: any;

  constructor(private afs: AngularFirestore,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    this.md = marked;
    this.md.setOptions({
      gfm: true,
      breaks: true
    })
  }

  convertMd(value: string): SafeHtml {
    const html = this.md(value);
    const safeHtml = DOMPurify.sanitize(html);
    return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
  }

  getBlogs() {
    return this.afs.collection('blogs', ref => ref.orderBy('date')).valueChanges()
  }

  getBlog(name: string) {
    return this.http.get('https://api.github.com/repos/ujjwal-kr/blog-db/contents/' + name + '.md');
  }
}
