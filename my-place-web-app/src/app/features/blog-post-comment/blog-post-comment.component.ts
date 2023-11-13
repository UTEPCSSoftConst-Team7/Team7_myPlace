import { CommonModule,AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { map } from "rxjs/operators";

import { User } from "../../core/models/user/user.model";
import { UserService } from "../../core/services/user.service";
import { Comment } from "../../core/models/comment/comment.model";


@Component({
  selector: "blog-post-comment",
  standalone: true,
  imports: [CommonModule,RouterLink, DatePipe, NgIf, AsyncPipe],
  templateUrl: './blog-post-comment.component.html',
  styleUrls: ['./blog-post-comment.component.css']
})

export class BlogPostCommentComponent {
  @Input() comment!: Comment;
  @Output() delete = new EventEmitter<boolean>();

  canModify$ = inject(UserService).currentUser.pipe(
    map(
      (userData: User | null) =>
        userData?.username === this.comment.author.username || false
    )
  );
}







