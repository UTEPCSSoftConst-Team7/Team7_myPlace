import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadMePageComponent } from './read-me-page/read-me-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessagingComponent } from './messaging/messaging.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FriendComponent } from './friend/friend.component';
import { IconComponent } from './icon/icon.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { MessagingLogsComponent } from './messaging-logs/messaging-logs.component';




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
    UserComponent,
    SearchBarComponent,
    FriendComponent,
    IconComponent,
    FriendListComponent,
    MessagingLogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
