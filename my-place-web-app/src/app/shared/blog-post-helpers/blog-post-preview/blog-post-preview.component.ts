import { Component, Input } from '@angular/core';
import { BlogPost } from "../../../core/models/blog-post/blog-post.model";
import { BlogPostMetaComponent } from "../blog-post-meta/blog-post-meta.component";
import { FavoriteButtonComponent } from "../../buttons/favorite-button/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.css'],
  imports: [BlogPostMetaComponent, FavoriteButtonComponent, RouterLink, NgForOf],
  standalone: true,
})
export class BlogPostPreviewComponent {
  @Input() blogPost!: BlogPost;

  toggleFavorite(favorited: boolean): void {
    this.blogPost.favorited = favorited;

    if (favorited) {
      this.blogPost.favoritesCount++;
    } else {
      this.blogPost.favoritesCount--;
    }
  }
}
