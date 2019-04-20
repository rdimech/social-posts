import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class socialPostsComponent {
  title = 'My Thoughts';
  openForm: boolean = false;
  postsList = [{postTitle: 'post 2', postDesc: 'My second post!!'}, 
  {postTitle: 'post 1', postDesc: 'My very first post!'}];

  onSubmit = () => {
    this.openForm = true;
  };
  
  onAdd = (newPost) => {
    this.openForm = false;
    this.postsList.unshift(newPost);
  };

  onDelete = (deletePost) => {
    console.log(deletePost);
    this.postsList.splice(deletePost,1);
  };
}
