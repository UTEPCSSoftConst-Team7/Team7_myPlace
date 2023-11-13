import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { switchMap, takeUntil } from "rxjs/operators";
import { EMPTY, Subject } from "rxjs";
import { UserService } from "../../../core/services/user.service";
import { User } from "../../../core/models/user/user.model";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css'],
  imports: [NgClass],
  standalone: true,
})
export class FollowButtonComponent implements OnDestroy {
  @Input() user!: User;
  @Output() toggle = new EventEmitter<User>();
  isSubmitting = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleFollowing(): void {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        switchMap((isAuthenticated: boolean) => {
          if (!isAuthenticated) {
            void this.router.navigate(["/login"]);
            return EMPTY;
          }

          if (!this.user.following) {
            return this.userService.follow(this.user.username);
          } else {
            return this.userService.unfollow(this.user.username);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (user) => {
          this.isSubmitting = false;
          this.toggle.emit(user);
        },
        error: () => (this.isSubmitting = false),
      });
  }
}
