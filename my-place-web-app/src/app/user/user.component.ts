import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { UserService } from './user.service';
import { User } from './user.interface'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {

  user: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Fetch user data from the service
    this.userService.getUsers().subscribe(data => {
      this.user = data; // Assign the user data to the user property
    });
  }

}
