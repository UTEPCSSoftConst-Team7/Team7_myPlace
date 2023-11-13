import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { EMPTY } from "rxjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReadMePageComponent } from '../features/read-me-page/read-me-page.component';
import { AboutUsPageComponent } from '../features/about-us-page/about-us-page.component';
import { AdminPageComponent } from '../features/admin-page/admin-page.component';
import { HomepageComponent } from '../features/homepage/homepage.component';
import { LandingPageComponent } from '../features/landing-page/landing-page.component';
import { MessagingComponent } from '../features/messaging/messaging.component';
import { CreateAccountComponent } from '../features/create-account/create-account.component';
import { SignInComponent } from '../features/sign-in/sign-in.component';
import { UserComponent } from '../features/user/user.component';
import { SearchBarComponent } from '../features/search-bar/search-bar.component';
import { AdminCommandsComponent } from '../features/admin-commands/admin-commands.component';
import { BlogPostComponent } from '../features/blog-post/blog-post.component';
import { BlogPostCommentComponent } from '../features/blog-post-comment/blog-post-comment.component';

import { JwtService } from "../core/services/jwt.service";
import { UserService } from "../core/services/user.service";
import { TokenInterceptor } from "../core/interceptors/token.interceptor";
import { ErrorInterceptor } from "../core/interceptors/error.interceptor";
import { ApiInterceptor } from "../core/interceptors/api.interceptor";
import { ListErrorsComponent } from './list-errors/list-errors.component';



export function initAuth(jwtService: JwtService, userService: UserService) {
  return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
}

@NgModule({
  declarations: [
    AppComponent,
    ReadMePageComponent,
    AboutUsPageComponent,
    AdminPageComponent,
    HomepageComponent,
    LandingPageComponent,
    MessagingComponent,
    CreateAccountComponent,
    SignInComponent,
    AdminPageComponent,
    UserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListErrorsComponent,
    BlogPostCommentComponent,
    AdminCommandsComponent,
  ],

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [JwtService, UserService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
