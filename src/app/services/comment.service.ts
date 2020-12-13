import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'http://localhost:5000/api/v1/comments/';
  constructor(private http: HttpClient) { }
  getComment() {
    console.log(this.http.get<Comment[]>(this.url));
    return this.http.get<Comment[]>(this.url);
  }
  deleteComment(id) {
    return this.http.delete(this.url + id);
  }

  addComment(b: Comment) {
    return this.http.post(this.url, b);
  }

  searchComment(id) {
    return this.http.get(this.url + id);
  }

  putComment(b: Comment) {
    return this.http.put(this.url, b);
  }
}
