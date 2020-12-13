import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  constructor(private service: BlogService, private route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
  }
  blog: any;
  ngOnInit(): void {
    this.service.searchBlog(this.route.snapshot.paramMap.get('id')).subscribe(
      (e) => this.blog = e[0]
    );
  }

}
