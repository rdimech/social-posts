import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Post {
    postTitle: string;
    postDesc: string;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']

//   styleUrls: []
})
export class PostComponent {
  title = 'Post Component Module';
  @Input() post: Post;
  @Input() postIndex: number;
  @Output() removePost = new EventEmitter<any>();

  deletePost =() => {
    this.removePost.emit(this.postIndex);
  };

}