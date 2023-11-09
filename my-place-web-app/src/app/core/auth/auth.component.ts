import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  Validators,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ListErrorsComponent } from '../../shared/list-errors.component';
import { Errors } from '../models/errors.model';
import { UserService } from '../services/user.service';

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
  username?: FormControl<string>;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    ListErrorsComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  selector: 'app-auth-page', // <app-auth-page></app-auth-page>
})
export class AuthComponent {
  authType: String = '';
  title: String = '';
  errors: Errors = { errors: {} };
  isSubmitting: boolean = false;
  authForm: FormGroup<AuthForm>;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    // use FormBuilder to create a form group
    this.authForm = new FormGroup<AuthForm>({
      email: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
  ngOnInit(): void {
    this.authType = this.route.snapshot.url.at(-1)!.path;
    this.title = this.authType === 'login' ? 'Sign in' : 'Sign up';
    if (this.authType === 'register') {
      this.authForm.addControl(
        'username',
        new FormControl('', {
          validators: [Validators.required],
          nonNullable: true,
        })
      );
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    let observable =
      this.authType === 'login'
        ? this.userService.login(
            this.authForm.value as { email: string; password: string }
          )
        : this.userService.register(
            this.authForm.value as {
              email: string;
              password: string;
              username: string;
            }
          );

    observable.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => void this.router.navigate(['/']),
      error: (err) => {
        this.errors = err;
        this.isSubmitting = false;
      },
    });
  }
}
