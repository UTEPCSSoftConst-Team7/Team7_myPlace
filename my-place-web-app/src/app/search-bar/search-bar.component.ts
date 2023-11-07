import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgModel } from '@angular/forms';

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


  Search(event: string, ngModel: NgModel) {
    if (ngModel.valid) {
      console.log(ngModel)
    } else {
      console.log(Error)
    }
  }

}
