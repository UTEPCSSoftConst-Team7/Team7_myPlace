import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
})
export class MessagingComponent {
  ProfileUser: User = {
    username: '',
    password: '',
    email: '',
    closeFriend: [],
    Blocked: [],
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.grabUser();
  }

  sendBack() {
    this.router.navigateByUrl('/user');
  }

  messageUser(friend: String) {
    const participants = [friend, this.ProfileUser.username];
    alert(participants);
  }

  grabUser() {
    const profile = localStorage.getItem('profileUser');
    if (profile != null || profile != undefined) {
      console.log('p', profile);
      var profileUser = JSON.parse(profile);
      console.log('profile', profileUser);
      this.ProfileUser = profileUser;
    }
  }
}
