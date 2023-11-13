import { Component,OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";

import { catchError, switchMap, takeUntil } from "rxjs/operators";
import { combineLatest, of, Subject, throwError } from "rxjs";
import { User } from  '../../core/models/user/user.model';
import { UserService } from "../../core/services/user.service";
import { FollowButtonComponent } from "../../shared/buttons/follow-button/follow-button.component";
import { AsyncPipe, NgIf } from "@angular/common";


@Component({
  selector: "app-user-page",
  imports: [
    CommonModule,
    FollowButtonComponent,
    NgIf,
    RouterLink,
    AsyncPipe,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  standalone: true,
})
export class UserPageComponent implements OnInit, OnDestroy {
  user!: User;
  isUser = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
    this.userService
      .get(this.route.snapshot.params["username"])
      .pipe(
        catchError((error) => {
          void this.router.navigate(["/"]);
          return throwError(error);
        }),
        switchMap((profile) => {
          return combineLatest([of(profile), this.userService.currentUser]);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(([profile, user]) => {
        this.user = profile;
        this.isUser = profile.username === user?.username;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleFollowing(profile: User) {
    this.user = profile;
  }
}
