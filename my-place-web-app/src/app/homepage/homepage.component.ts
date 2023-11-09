import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from 'express-serve-static-core';
import { MyServiceService } from '../my-service.service';
import { User } from '../User';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users: User[] = [];
  messages: any[] = [];

  constructor(private userService:UserService){ }

  ngOnInit() {
  // Call the method to store users in local storage
  this.userService.storeUsersInLocalStorage();
  this.userService.storeMessagesInLocalStorage();

  // Check if the data is in local storage
  const storedUsers = localStorage.getItem('users');
  const storedMessages = localStorage.getItem('messages');

  if (storedUsers) {
    this.users = JSON.parse(storedUsers);
    console.log('Users retrieved from local storage:', this.users);
  } else {
    console.warn('No users found in local storage.');
  }
  if (storedMessages) {
    this.messages = JSON.parse(storedMessages);
    console.log('Messages retrieved from local storage:', this.messages);
  } else {
    console.warn('No users found in local storage.');
  }

    
  }
}
