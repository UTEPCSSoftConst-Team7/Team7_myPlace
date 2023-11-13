import { Component, OnInit,Input, OnDestroy  } from '@angular/core';
import { BlogPostsService } from '../../../core/services/blog-posts.service';
import { UserPostsConfig } from "../../../core/models/user-posts-config/user-posts-config.model";
import { BlogPost} from "../../../core/models/blog-post/blog-post.model";
import { BlogPostPreviewComponent } from '../blog-post-preview/blog-post-preview.component';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { LoadingState } from "../../../core/models/loading-state/loading-state.model";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
  imports: [NgForOf, NgClass, NgIf, BlogPostPreviewComponent],
  standalone: true,
})

export class BlogPostListComponent implements OnDestroy {
  query!: UserPostsConfig;
  results: BlogPost[] = [];
  currentPage = 1;
  totalPages: Array<number> = [];
  loading = LoadingState.NOT_LOADED;
  LoadingState = LoadingState;
  destroy$ = new Subject<void>();

  @Input() limit!: number;
blogPost: BlogPost | undefined;
  @Input()
  set config(config: UserPostsConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  constructor(private blogPostsService: BlogPostsService) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = LoadingState.LOADING;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }

    this.blogPostsService
      .query(this.query)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.loading = LoadingState.LOADED;
        this.results = data.blogPosts;
        this.totalPages = Array.from(
          new Array(Math.ceil(data.blogCount / this.limit)),
          (val, index) => index + 1
        );
      });
  }
}
