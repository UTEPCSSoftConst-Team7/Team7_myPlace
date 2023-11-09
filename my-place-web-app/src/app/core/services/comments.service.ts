import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Comment } from "../models/comment/comment.model";

@Injectable({ providedIn: "root" })
export class CommentsService {
  constructor(private readonly http: HttpClient) {}

  getAll(slug: string): Observable<Comment[]> {
    return this.http
      .get<{ comments: Comment[] }>(`/blogPosts/${slug}/comments`)
      .pipe(map((data) => data.comments));
  }

  add(slug: string, payload: string): Observable<Comment> {
    return this.http
      .post<{ comment: Comment }>(`/blogPosts/${slug}/comments`, {
        comment: { body: payload },
      })
      .pipe(map((data) => data.comment));
  }

  delete(commentId: string, slug: string): Observable<void> {
    return this.http.delete<void>(`/blogPosts/${slug}/comments/${commentId}`);
  }
}
