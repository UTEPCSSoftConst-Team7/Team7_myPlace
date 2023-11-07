import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  users: any[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService){ }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  search() {
    if (this.searchTerm) {
      this.users = this.users.filter(user => user.username.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.userService.getUsers().subscribe((data: any) => {
        this.users = data;
      });
    }
  }
}
