import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from 'express-serve-static-core';
import { MyServiceService } from '../my-service.service';
import { BlogPost, User, Users } from '../User';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users: User[] = [];
  messages: any[] = [];
  USERs: Users[]=[];
  Blog: BlogPost[]=[];

  constructor(private userService:UserService){ }

  ngOnInit() {
  // Call the method to store users in local storage
  // this.userService.storeUsersInLocalStorage();
  // this.userService.storeMessagesInLocalStorage();
  // this.userService.storeBlogInLocalStorage();
  // this.userService.storeUSERSInLocalStorage();

  // Check if the data is in local storage
  const storedUsers = localStorage.getItem('users');
  const storedMessages = localStorage.getItem('messages');
  const storedUSERS = localStorage.getItem('Users');
  const storedBlogs = localStorage.getItem('Blog');

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

  if (storedUSERS) {
    this.USERs = JSON.parse(storedUSERS);
    console.log('Users retrieved from local storage:', this.USERs);
  } else {
    console.warn('No users found in local storage.');
  }

  if (storedBlogs) {
    this.Blog = JSON.parse(storedBlogs);
    console.log('Blog  retrieved from local storage:', this.Blog);
  } else {
    console.warn('No users found in local storage.');
  }

    
  }
}
