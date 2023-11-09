import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomepageComponent } from '../features/homepage/homepage.component';
import { LandingPageComponent } from '../features/landing-page/landing-page.component';
import { MessagingComponent } from '../features/messaging/messaging.component';
import { CreateAccountComponent } from '../features/create-account/create-account.component';
import { SignInComponent } from '../features/sign-in/sign-in.component';
import { UserComponent } from '../features/user/user.component';
import { UserService } from '../core/services/user.service';
import { JwtService } from '../core/services/jwt.service';
import { ShowAuthenticationDirective } from '../shared/show-authentication.directive';
import { map } from 'rxjs/operators';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { PostEditorComponent } from '../features/post-editor/post-editor.component';
import { BlogPostComponent } from '../features/blog-post/blog-post.component';
import { MarkdownPipe } from '../features/blog-post/markdown.pipe';
import { TagsService } from '../core/services/tags.service';
import { UserPageComponent } from '../features/user-page/user-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'messaging',
    component: MessagingComponent,
  },
  {
    path: 'createaccount',
    component: CreateAccountComponent,
    canActivate: [() => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),],
  },
  {
    path: 'signin',
    component: SignInComponent,
    canActivate: [() => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),],
  },
  {
    path: 'user',
    component: UserComponent
  },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
