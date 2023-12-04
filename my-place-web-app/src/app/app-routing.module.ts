import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessagingComponent } from './messaging/messaging.component';
import { CreateAccountComponent } from './create-account/create-account.component'; 
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { FriendComponent } from './friend/friend.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { IconComponent } from './icon/icon.component';
import { MessagingLogsComponent } from './messaging-logs/messaging-logs.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingPageComponent
  },
  { 
    path: 'homepage', 
    component: HomepageComponent
  },
  { 
    path: 'user/messaging', 
    component: MessagingComponent
  },
  { 
    path: 'createaccount', 
    component: CreateAccountComponent
  },
  { 
    path: 'signin', 
    component: SignInComponent
  },
  { 
    path: 'user', 
    component: UserComponent
  },
  {
    path: 'user/friend',
    component: FriendComponent
  },
  {
    path: 'user/friendList',
    component: FriendListComponent
  },
  {
    path: 'user/icon',
    component: IconComponent
  },
  {
    path: 'user/messagingLog',
    component: MessagingLogsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
