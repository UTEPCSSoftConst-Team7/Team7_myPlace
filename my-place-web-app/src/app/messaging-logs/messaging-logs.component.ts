import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';


@Component({
  selector: 'app-messaging-logs',
  templateUrl: './messaging-logs.component.html',
  styleUrls: ['./messaging-logs.component.css']
})
export class MessagingLogsComponent implements OnInit {

  ProfileUser: User=  {
    username: '',
    password: '',
    email: '',
    closeFriend: [],
    Blocked: []
  }

  constructor(private userService: UserService, private router: Router ){

   }




  ngOnInit()  {
    this.grabUser();
    
  }

  
  sendBack() {
    this.router.navigateByUrl("/user")
  }

  //Store the user that will be the particates for the direct messaging 
  messageUser(friend:String){
    const participants = [friend,this.ProfileUser.username]

    // alert(participants)
    localStorage.setItem('participants',JSON.stringify(participants))
    this.router.navigateByUrl('user/messaging')
  }

  
  grabUser() {
    const profile = localStorage.getItem('profileUser')
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.ProfileUser = profileUser
    }
  }
}
