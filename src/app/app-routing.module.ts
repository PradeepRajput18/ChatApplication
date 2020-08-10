import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { TrailComponent } from './trail/trail.component';
import { GgtvComponent } from './ggtv/ggtv.component';
import { PostsComponent } from './posts/posts.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"chat",component:ChatpageComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"status",component:StatusComponent},
  {path:"posts",component:PostsComponent},
  {path:"ggtv",component:GgtvComponent},
  {path:"trail",component:TrailComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
