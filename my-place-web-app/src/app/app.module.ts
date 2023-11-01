import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadMePageComponent } from './read-me-page/read-me-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadMePageComponent,
    AboutUsPageComponent,
    AdminPageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
