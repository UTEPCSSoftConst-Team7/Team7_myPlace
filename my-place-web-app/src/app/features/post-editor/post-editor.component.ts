import { Component,OnDestroy, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from "@angular/common";

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
} from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { Subject, combineLatest } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Errors } from '../../core/models/errors/errors.model';
import { BlogPostsService } from "../../core/services/blog-posts.service";
import { UserService } from "../../core/services/user.service";
import { ListErrorsComponent } from '../../shared/list-errors/list-errors.component';

interface BlogPostForm {
  title: FormControl<string>;
  description: FormControl<string>;
  body: FormControl<string>;
}


@Component({
  selector: 'app-post-editor',
  standalone: true,
  imports: [CommonModule, ListErrorsComponent, ReactiveFormsModule, NgForOf],
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
})

export class PostEditorComponent implements OnInit, OnDestroy {
  tagList: string[] = [];
  blogPostForm: UntypedFormGroup = new FormGroup<BlogPostForm>({
    title: new FormControl("", { nonNullable: true }),
    description: new FormControl("", { nonNullable: true }),
    body: new FormControl("", { nonNullable: true }),
  });
  tagField = new FormControl<string>("", { nonNullable: true });

  errors: Errors | null = null;
  isSubmitting = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly blogPostsService: BlogPostsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params["slug"]) {
      combineLatest([
        this.blogPostsService.get(this.route.snapshot.params["slug"]),
        this.userService.getCurrentUser(),
      ])
        .pipe(takeUntil(this.destroy$))
        .subscribe(([blogPost, { user }]) => {
          if (user.username === blogPost.author.username) {
            this.tagList = blogPost.tagList;
            this.blogPostForm.patchValue(blogPost);
          } else {
            void this.router.navigate(["/"]);
          }
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (tag != null && tag.trim() !== "" && this.tagList.indexOf(tag) < 0) {
      this.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset("");
  }

  removeTag(tagName: string): void {
    this.tagList = this.tagList.filter((tag) => tag !== tagName);
  }

  submitForm(): void {
    this.isSubmitting = true;

    // update any single tag
    this.addTag();

    // post the changes
    this.blogPostsService
      .create({
        ...this.blogPostForm.value,
        tagList: this.tagList,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blogPost) => this.router.navigate(["/blogPost/", blogPost.slug]),
        error: (err) => {
          this.errors = err;
          this.isSubmitting = false;
        },
      });
  }
}
