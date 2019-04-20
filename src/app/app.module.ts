import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { socialPostsComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './postForm/postForm.component';


@NgModule({
  declarations: [
    socialPostsComponent, PostComponent, PostFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [socialPostsComponent]
})
export class AppModule { }
