import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  users: User[] = [];
  username: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router) { }

  /**
   * Get the list of users from local storage
   */
  ngOnInit() {
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers != null) {
      this.users = JSON.parse(storedUsers);
      console.log('User retrieved from local storage:', this.users);
    }
    else {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        localStorage.setItem('Users', JSON.stringify(users));
        console.log('Users retrieved from JSON file:', this.users);
      });
    }
  }

  /**
   *  Check if the user exists in the database from json response
   *  and navigate to the user page
   */
  CheckUser() {
    const user = this.users.find(u => u.username === this.username);
    if (user) {
      if (user.password == this.password) {
        localStorage.setItem('profileUser', JSON.stringify(user));
        console.log('log user', localStorage.getItem('profileUser'))
        new Promise(resolve => setTimeout(resolve, 1));
        this.router.navigateByUrl("/user")
      }
      else {
        alert("wrong username or password")
      }
    }
    else {
      alert("wrong username or password")
    }
  }

  /**
   * Navigate to the detail page for the signed-in user
   * @param id
   */
  navigateToDetailPage(id: string) {
    this.router.navigate(['/user', id]);
  }
}
