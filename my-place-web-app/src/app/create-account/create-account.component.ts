import { Component,OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{
  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  bio:string = "";
  email: string = "";
  users: User[] = [] ;

  newUser: User = {
    username: '',
    password: '',
    email: '',
    bio:'',
  }
  constructor(private router: Router){ }

  ngOnInit() :void{
    var storedUsers = localStorage.getItem('users');
    if (storedUsers != null){
      var users = JSON.parse(storedUsers);
      console.log(users)
    }

  }


  createNewUser(){
    if (this.username.length!=0 && this.password.length!=0 && this.email.length!=0 && this.bio.length!=0){
      if (this.password==this.confirmpassword){
        const newUser = {
          username: this.username,
          password: this.password,
          email: this.email,
          bio: this.bio
        };


        console.log(newUser)

        var storedUsers = localStorage.getItem('users');
        let users: any[] = [];

        if (storedUsers != null){
          users = JSON.parse(storedUsers);
          console.log('Users retrieved from local storage:', this.users);
          users.push(newUser)

          console.log('New Users added to list :', users);
          localStorage.setItem('users', JSON.stringify(users));
          localStorage.setItem('profileUser', JSON.stringify(newUser));
          //add a time sleep 
          setTimeout(() => {
            this.router.navigateByUrl("/user");
          }, 500);
        }
        // console.log(storedUsers)
      }
      else{
        alert("please make sure that the password match")
      }
    }
    else{
      alert("please fill out everything before moving forward")
    }
  }
}
