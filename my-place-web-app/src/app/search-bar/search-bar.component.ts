import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';

import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { User } from '../user/user.interface';

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
  users: User[] = [];

  constructor(private userService: UserService, private router: Router ){ }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  onSearchInputChange(event:any){
    for (let i=0;i<this.users.length;i++){
      this.options.push(this.users[i].username)
    }

    this.serchUser=event.value
    this.filteredOptions = this.options.filter(user =>
      user.toLowerCase().includes(this.serchUser.toLowerCase())
    );
    this.autoFilterTop=this.filteredOptions[0]
  }

  search() {
    const user = this.users.find(u => u.username === this.autoFilterTop);
    if (user) {
      this.router.navigate(['/user', user.username]);
    } else {
      alert('User not found');
    }
  }

}
