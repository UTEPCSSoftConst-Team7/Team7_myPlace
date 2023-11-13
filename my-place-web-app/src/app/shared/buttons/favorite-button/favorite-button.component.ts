import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Subject, switchMap } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { NgClass } from "@angular/common";
import { BlogPostsService } from '../../../core/services/blog-posts.service';
import { UserService } from '../../../core/services/user.service';
import { BlogPost } from "../../../core/models/blog-post/blog-post.model";

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css'],
  imports: [NgClass],
  standalone: true,
})

export class FavoriteButtonComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  isSubmitting = false;

  @Input() blogPost!: BlogPost;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(
    private readonly blogPostsService: BlogPostsService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleFavorite(): void {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        switchMap((authenticated) => {
          if (!authenticated) {
            void this.router.navigate(["/login"]);
            return EMPTY;
          }

          if (!this.blogPost.favorited) {
            return this.blogPostsService.favorite(this.blogPost.slug);
          } else {
            return this.blogPostsService.unfavorite(this.blogPost.slug);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.toggle.emit(!this.blogPost.favorited);
        },
        error: () => (this.isSubmitting = false),
      });
  }
}
