import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = 'http://localhost:5000/api/v1/blogs/';

  constructor(private http: HttpClient) { }
  getBlog() {
    console.log(this.http.get<Blog[]>(this.url));
    return this.http.get<Blog[]>(this.url);
  }
  deleteBlog(id) {
    return this.http.delete(this.url + id);
  }

  addBlog(b: Blog) {
    return this.http.post(this.url, b);
  }

  searchBlog(id) {
    return this.http.get(this.url + id);
  }

  putBlog(b: Blog, id) {
    return this.http.put(this.url + id, b );
  }
}
