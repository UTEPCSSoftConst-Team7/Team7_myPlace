import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  options: string[] = [];
  filteredOptions: any | undefined;
  searchUser: any;
  searchTerm: string = '';
  autoFilterTop: string = '';
  users: User[] = [];
  inputText: string = '';
  isInputValid: boolean = false;
  ProfileUser: User = {
    username: '',
    password: '',
    email: '',
    closeFriend: [],
    Blocked: []
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.grabUser()
    // Getting all of the username of every account created
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers != null) {
      this.users = JSON.parse(storedUsers);
    }
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username != this.ProfileUser.username) {
        this.options.push(this.users[i].username);
      }

    }
  }

  //This is to grab your account 
  grabUser() {
    const profile = localStorage.getItem('profileUser');
    if (profile) {
      var profileUser = JSON.parse(profile);
      this.ProfileUser = profileUser;
    }
  }

  //take out any spaces you add to the search 
  checkInput() {
    this.isInputValid = this.inputText.trim() !== '';
  }


  //check the list of friends base on every letter you typel
  onInputChange(event: any, ngModel: NgModel) {
    this.searchUser = ngModel.value;
    this.filteredOptions = this.options.filter((user) =>
      user.toLowerCase().includes(this.searchUser.toLowerCase())
    );
    this.autoFilterTop = this.filteredOptions[0];
  }

  //if the user exist then you can go to the friend page
  search() {
    const user = this.users.find((u) => u.username === this.autoFilterTop);
    if (user) {
      localStorage.setItem('friend', JSON.stringify(user));
      this.router.navigateByUrl('/user/friend');
    } else {
      alert('User not found');
    }
  }

//if the user exist then you can go to the friend page  
  Search(user: string) {
    const User = this.users.find((u) => u.username == user);
    if (User) {
      localStorage.setItem('friend', JSON.stringify(User));
      this.router.navigateByUrl('/user/friend');
    } else {
      alert('User not found');
    }
  }
}
