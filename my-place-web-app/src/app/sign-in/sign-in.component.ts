import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit  {
  users: User[] = [] ;
  username:string = "";
  password:string = "";

constructor(private userService: UserService, private router: Router ){ }

ngOnInit() {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers != null){
    this.users = JSON.parse(storedUsers);
    console.log('Users retrieved from local storage:', this.users);
  }
}


CheckUser(){
  const user = this.users.find(u => u.username === this.username);
  console.log('user',user)
  console.log('u',this.username)
  console.log('p',this.password)
  if (user){
    if(user.password==this.password){
      // localStorage.setItem('ProfileUser', JSON.stringify(user));
      console.log('log user',localStorage.getItem('ProfileUser'))
      new Promise(resolve => setTimeout(resolve, 1));
      this.navigateToDetailPage(user.username)
      this.router.navigateByUrl("/user")
    }
    else{
    alert("wrong username or password")
    }
  }
  else{
    alert("wrong username or password")
  }
}
navigateToDetailPage(id: string) {
  this.router.navigate(['/user', id]);
}
}
