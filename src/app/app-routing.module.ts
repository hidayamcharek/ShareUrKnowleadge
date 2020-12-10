import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ProfilComponent} from './auth/profil/profil.component';
import {ReadBlogComponent} from './blog/read-blog/read-blog.component';
import {UpdateBlogComponent} from './blog/update-blog/update-blog.component';
import {DeleteBlogComponent} from './blog/delete-blog/delete-blog.component';
import {CreateBlogComponent} from './blog/create-blog/create-blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'blog', component: ReadBlogComponent},
  { path: 'editblog', component: UpdateBlogComponent},
  { path: 'deleteblog', component: DeleteBlogComponent},
  { path: 'createblog', component: CreateBlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
