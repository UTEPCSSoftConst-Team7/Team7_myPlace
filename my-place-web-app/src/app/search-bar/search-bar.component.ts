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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers != null) {
      this.users = JSON.parse(storedUsers);
    }
    for (let i = 0; i < this.users.length; i++) {
      this.options.push(this.users[i].username);
    }
  }

  checkInput() {
    this.isInputValid = this.inputText.trim() !== '';
  }

  onInputChange(event: any, ngModel: NgModel) {
    this.searchUser = ngModel.value;
    this.filteredOptions = this.options.filter((user) =>
      user.toLowerCase().includes(this.searchUser.toLowerCase())
    );
    this.autoFilterTop = this.filteredOptions[0];
  }

  search() {
    const user = this.users.find((u) => u.username === this.autoFilterTop);
    if (user) {
      localStorage.setItem('friend', JSON.stringify(user));
      this.router.navigateByUrl('/user/friend');
    } else {
      alert('User not found');
    }
  }

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
