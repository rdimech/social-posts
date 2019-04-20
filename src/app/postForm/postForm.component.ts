import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'postForm',
  templateUrl: './postForm.component.html',
  styleUrls: ['./postForm.component.css']

//   styleUrls: []
})
export class PostFormComponent {
  title = 'Post Form Component Module'; 
  pTitle: string;
  desc: string;
  @Output () add = new EventEmitter<any>();

  addPost = () => {
    this.add.emit({
      postTitle: this.pTitle,
      postDesc: this.desc
    }); 
    this.pTitle='';
    this.desc='';  
  };
  
}