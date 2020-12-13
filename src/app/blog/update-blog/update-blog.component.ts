import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  blog: Blog;
  listBlog: Blog[];
  val: string;

  constructor(private service: BlogService, private route: ActivatedRoute, private router: Router) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
  }

  updateForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl('')
    }
  );

  ngOnInit(): void {
    this.service.searchBlog(this.route.snapshot.paramMap.get('id')).subscribe(
      (e) => {
        this.blog = e[0];
        this.updateForm.controls.titre.setValue(e[0].titre);
        this.updateForm.controls.description.setValue(e[0].description);
      }
    );
    console.log('*******' + this.blog.titre);

  }

  save() {
    {
      this.blog.titre = this.updateForm.controls.titre.value;
      this.blog.description = this.updateForm.controls.description.value;
      this.blog.etat = '';
      console.log(this.blog);
      this.service.putBlog(this.blog, this.route.snapshot.paramMap.get('id')).subscribe(
        (e) => this.router.navigate(['/singleblog', this.route.snapshot.paramMap.get('id')])
       // (e) => console.log(this.updateForm.get('titre'))
      );
      //
      // console.log((this.id));
    }
  }
}
