import { Component,OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { User } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Friend: User ={
    username: 'NicoJ115',
    password: 'adsfa',
    email: 'sdafa'
  }
  ProfileUser: User= {
    username: 'isaba3lla',
    password: 'isaba3llaPass',
    email: 'isaba3lla@example.com',
    bio: 'Art and design lover',
    profilePicture: '',
    blogPosts: ["Painting progress","Coding my project","Going to Camp Flogna","Ban for Ban who work at MaterCard."],
    friends: [this.Friend],
  };



  ngOnInit() {
    this.grabUser()
    
  }

  grabUser(){
  //  this.ProfileUser= localStorage.getItem('profileUser')
   this.ProfileUser.profilePicture = "assert/"+this.ProfileUser.profilePicture
   

  }

}
