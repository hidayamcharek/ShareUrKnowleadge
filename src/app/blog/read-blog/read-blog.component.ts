import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-read-blog',
  templateUrl: './read-blog.component.html',
  styleUrls: ['./read-blog.component.css']
})
export class ReadBlogComponent implements OnInit {
  listBlog: Blog[];
  blog: Blog;
  val: string;
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.getBlog().subscribe(
      (data: Blog[]) => this.listBlog = data
    );
  }
}
