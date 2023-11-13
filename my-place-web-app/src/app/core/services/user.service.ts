import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

import { JwtService } from "./jwt.service";
import { map, distinctUntilChanged, tap, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user/user.model';
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = this.currentUser.pipe(map((user) => !!user));

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService,
    private readonly router: Router
  ) {}

  /******* User Authentication *******/
  login(credentials: {
    email: string;
    password: string;
  }): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>("/users/login", { user: credentials })
      .pipe(tap(({ user }) => this.setAuth(user, user.token || "")));
  }

  register(credentials: {
    username: string;
    email: string;
    password: string;
  }): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>("/users", { user: credentials })
      .pipe(tap(({ user }) => this.setAuth(user, user.token || "")));
  }

  logout(): void {
    this.purgeAuth();
    void this.router.navigate(["/"]);
  }

  getCurrentUser(): Observable<{ user: User }> {
    return this.http.get<{ user: User }>("/user").pipe(
      tap({
        next: ({ user }) => this.setAuth(user, user.token || ""),
        error: () => this.purgeAuth(),
      }),
      shareReplay(1)
    );
  }

  update(user: Partial<User>): Observable<{ user: User }> {
    return this.http.put<{ user: User }>("/user", { user }).pipe(
      tap(({ user }) => {
        this.currentUserSubject.next(user);
      })
    );
  }

  setAuth(user: User, token: string): void {
    this.jwtService.saveToken(token);
    this.currentUserSubject.next(user);
  }

  purgeAuth(): void {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
  }



  /******* User Profile *******/


  get(username: string): Observable<User> {
    return this.http.get<{ user: User }>("/users/" + username).pipe(
      map((data: { user: User }) => data.user),
      shareReplay(1)
    );
  }

  follow(username: string): Observable<User> {
    return this.http
      .post<{ user: User }>("/users/" + username + "/follow", {})
      .pipe(map((data: { user: User }) => data.user));
  }

  unfollow(username: string): Observable<User> {
    return this.http
      .delete<{ user: User }>("/users/" + username + "/follow")
      .pipe(map((data: { user: User }) => data.user));
  }

  isFollowing(username: string): Observable<boolean> {
    return this.http
      .get<{ user: User }>("/user/" + username)
      .pipe(map((data: { user: User }) => !!data.user?.following));
  }

  getUser(username: string): Observable<User> {
    return this.http
      .get<{ user: User }>("/user/" + username)
      .pipe(map((data: { user: User }) => data.user));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<{ users: User[] }>("/users")
      .pipe(map((data: { users: User[] }) => data.users));
  }
}
