import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserPostsConfig } from '../../core/models/user-posts-config/user-posts-config.model';
import { BlogPost } from '../../core/models/blog-post/blog-post.model';

@Injectable({ providedIn: "root" })
export class BlogPostsService {
  constructor(private readonly http: HttpClient) {}

  query(
    config: UserPostsConfig
  ): Observable<{ blogPosts: BlogPost[]; blogCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    let params = new HttpParams();

    Object.keys(config.filters).forEach((key) => {
      // @ts-ignore
      params = params.set(key, config.filters[key]);
    });

    return this.http.get<{ blogPosts: BlogPost[]; blogCount: number }>(
      "/blogPosts" + (config.type === "feed" ? "/feed" : ""),
      { params }
    );
  }

  get(slug: string): Observable<BlogPost> {
    return this.http
      .get<{ blogPost: BlogPost }>(`/blogPosts/${slug}`)
      .pipe(map((data) => data.blogPost));
  }

  delete(slug: string): Observable<void> {
    return this.http.delete<void>(`/blogPosts/${slug}`);
  }

  create(blogPost: Partial<BlogPost>): Observable<BlogPost> {
    return this.http
      .post<{ blogPost: BlogPost }>("/blogPosts/", { blogPost: blogPost })
      .pipe(map((data) => data.blogPost));
  }

  update(blogPost: Partial<BlogPost>): Observable<BlogPost> {
    return this.http
      .put<{ blogPost: BlogPost }>(`/blogPosts/${blogPost.slug}`, {
        blogPost: blogPost,
      })
      .pipe(map((data) => data.blogPost));
  }

  favorite(slug: string): Observable<BlogPost> {
    return this.http
      .post<{ blogPost: BlogPost }>(`/blogPosts/${slug}/favorite`, {})
      .pipe(map((data) => data.blogPost));
  }

  unfavorite(slug: string): Observable<void> {
    return this.http.delete<void>(`/blogPosts/${slug}/favorite`);
  }
}
