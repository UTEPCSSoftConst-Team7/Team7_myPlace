import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { User } from "../../core/models/user/user.model";
import { BlogPost } from "../../core/models/blog-post/blog-post.model";
import { BlogPostsService } from "../../core/services/blog-posts.service";
import { CommentsService } from "../../core/services/comments.service";
import { UserService } from "../../core/services/user.service";

import { BlogPostMetaComponent } from "../../shared/blog-post-helpers/blog-post-meta/blog-post-meta.component";
import { AsyncPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { FollowButtonComponent } from "../../shared/buttons/follow-button/follow-button.component";
import { FavoriteButtonComponent } from "../../shared/buttons/favorite-button/favorite-button.component";
import { ListErrorsComponent } from "../../shared/list-errors/list-errors.component";
import { BlogPostCommentComponent } from "../../features/blog-post-comment/blog-post-comment.component";

import { MarkdownPipe } from "./markdown.pipe";

import { catchError, takeUntil } from "rxjs/operators";
import { Subject, combineLatest, throwError } from "rxjs";
import { Comment } from "../../core/models/comment/comment.model";
import { ShowAuthenticationDirective } from "../../shared/show-authentication.directive";

import { Errors } from "../../core/models/errors/errors.model";


@Component({
  selector: "app-blog-post-page",
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  providers: [BlogPostsService, CommentsService],
  imports: [
    BlogPostMetaComponent,
    RouterLink,
    NgClass,
    FollowButtonComponent,
    FavoriteButtonComponent,
    NgForOf,
    MarkdownPipe,
    AsyncPipe,
    ListErrorsComponent,
    FormsModule,
    BlogPostCommentComponent,
    ReactiveFormsModule,
    ShowAuthenticationDirective,
    NgIf,
  ],
  standalone: true,
})

export class BlogPostComponent implements OnInit, OnDestroy {
  blogPost!: BlogPost;
  currentUser!: User | null;
  comments: Comment[] = [];
  canModify = false;

  commentControl = new FormControl<string>("", { nonNullable: true });
  commentFormErrors: Errors | null = null;

  isSubmitting = false;
  isDeleting = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly blogPostService: BlogPostsService,
    private readonly commentsService: CommentsService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.params["slug"];
    combineLatest([
      this.blogPostService.get(slug),
      this.commentsService.getAll(slug),
      this.userService.currentUser,
    ])
      .pipe(
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(err);
        })
      )
      .subscribe(([blogPost, comments, currentUser]) => {
        this.blogPost = blogPost;
        this.comments = comments;
        this.currentUser = currentUser;
        this.canModify = currentUser?.username === blogPost.author.username;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleFavorite(favorited: boolean): void {
    this.blogPost.favorited = favorited;

    if (favorited) {
      this.blogPost.favoritesCount++;
    } else {
      this.blogPost.favoritesCount--;
    }
  }

  toggleFollowing(user: User): void {
    this.blogPost.author.following = user.following;
  }

  deleteBlogPost(): void {
    this.isDeleting = true;

    this.blogPostService
      .delete(this.blogPost.slug)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        void this.router.navigate(["/"]);
      });
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = null;

    this.commentsService
      .add(this.blogPost.slug, this.commentControl.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (comment) => {
          this.comments.unshift(comment);
          this.commentControl.reset("");
          this.isSubmitting = false;
        },
        error: (errors) => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
        },
      });
  }

  deleteComment(comment: Comment): void {
    this.commentsService
      .delete(comment.id, this.blogPost.slug)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.comments = this.comments.filter((item) => item !== comment);
      });
  }

  trackById(index: number, item: Comment): string {
    return item.id;
  }
}
