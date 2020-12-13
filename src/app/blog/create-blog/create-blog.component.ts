import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  blog: Blog;
  listBlog: Blog[];
  val: string;
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.blog = new Blog();
    this.val = 'Submit';
  }
  save() {
    if (this.val === 'Submit') {
      this.service.addBlog(this.blog).subscribe(
        () => this.listBlog = [this.blog, ...this.listBlog]
      );
    }
  }

}
