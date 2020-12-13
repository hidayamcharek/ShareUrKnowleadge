import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BlogService} from '../../services/blog.service';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  blog: Blog;
  listBlog: Blog[];
  val: string;
  id: any;
  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blog = new Blog();
    this.val = 'Submit';
  }
  save(f: NgForm) {
    {
      console.log(f.value);
      this.blog.titre = f.value.titre;
      this.blog.description = f.value.description;
      console.log(this.blog);
      this.service.addBlog(this.blog).subscribe(
        (e) => this.router.navigate(['/singleblog', e])
      );
      //
      // console.log((this.id));
    }
  }

}
