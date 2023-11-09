import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';

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
  serchUser:any;
  searchTerm: string = '';
  autoFilterTop:string ='';
  users: User[] = [] ;
  inputText: string = '';
  isInputValid: boolean = false;

  constructor(private userService: UserService, private router: Router ){ }

  ngOnInit() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers != null){
      this.users = JSON.parse(storedUsers);
      console.log('Users retrieved from local storage:', this.users);
    }
    for (let i=0;i<this.users.length;i++){
      this.options.push(this.users[i].username)
    }
    console.log("options",this.options)
  }

  checkInput() {
    this.isInputValid = this.inputText.trim() !== '';
    console.log('here is the input text',this.inputText);
  }
  // console.log(this.inputText);
  onInputChange(event:any,ngModel: NgModel){
    this.serchUser = ngModel.value
    // console.log(this.serchUser)

    this.filteredOptions = this.options.filter(user =>
      user.toLowerCase().includes(this.serchUser.toLowerCase())
    );

    // console.log(this.filteredOptions)
    this.autoFilterTop=this.filteredOptions[0]
    // console.log(this.autoFilterTop)
  }

  search() {
    const user = this.users.find(u => u.username === this.autoFilterTop);
    if (user) {
      // console.log(user)
      console.log(this.autoFilterTop)
      // this.router.navigate(['/user', user.username]);
    } else {
      alert('User not found');
    }
  }

}
