import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './components/blog/blog.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
