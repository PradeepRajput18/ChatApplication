import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { TrailComponent } from './trail/trail.component';
import { StatusComponent } from './status/status.component';
import { PostsComponent } from './posts/posts.component';
import { GgtvComponent } from './ggtv/ggtv.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    PagenotfoundComponent,
    ChatpageComponent,
    SidenavComponent,
    TopnavComponent,
    TrailComponent,
    StatusComponent,
    PostsComponent,
    GgtvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
