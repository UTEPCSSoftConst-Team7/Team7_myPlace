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

constructor(private userService: UserService, private router: Router ){ }

ngOnInit() {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers != null){
    this.users = JSON.parse(storedUsers);
    console.log('Users retrieved from local storage:', this.users);
  }
}


CheckUser(){
  var username="nicoJ115"
  var password="nico1234"
  const user = this.users.find(u => u.username === username);
  console.log('user',user)
  console.log('u',username)
  console.log('p',password)
  if (user){
    alert('why')
    if(user.password==password){
      alert('how')
      localStorage.setItem('ProfileUser', JSON.stringify(user));
      console.log('log user',localStorage.getItem('ProfileUser'))
      new Promise(resolve => setTimeout(resolve, 1));
      this.navigateToDetailPage(user.username)
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
