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
    bio: '',
    closeFriend: [],
    Blocked: []
  }
  randomNumber: number | undefined;
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
          bio: this.bio,
          profilePicture: this.profilePic(),
          friends:['Team_MyPlace']
        };


        console.log(newUser)

        var storedUsers = localStorage.getItem('Users');
        let users: any[] = [];

        if (storedUsers != null){
          users = JSON.parse(storedUsers);
          console.log('Users retrieved from local storage:', this.users);
          users.push(newUser)

          console.log('New Users added to list :', users);
          localStorage.setItem('Users', JSON.stringify(users));
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

  profilePic(){
    this.randomNumber = Math.floor(Math.random() * 10) + 1;
    if(this.randomNumber==1){
      return "assets/among.png"
    }
    else if(this.randomNumber==2){
      return "assets/cat.png"
    }
    else if(this.randomNumber==3){
      return "assets/catFist.png"
    }
    else if(this.randomNumber==4){
      return "assets/dice.png"
    }
    else if(this.randomNumber==5){
      return "assets/joji.png"
    }
    else if(this.randomNumber==6){
      return "assets/mfDoom.png"
    }
    else if(this.randomNumber==7){
      return "assests/pizzabella.png"
    }
    else if(this.randomNumber==8){
      return "assets/spiderman.png"
    }
    else if(this.randomNumber==9){
      return "assets/sandy.png"
    }
    else{
      return "assets/peopleiconmp.png"
    }
  }
}
