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
    if (this.grabUser()!= null){
      this.ProfileUser.profilePicture=this.grabUser()
    }
    
  }

  grabUser(){
   // this.ProfileUser= localStorage.getItem('profileUser')
   var imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
   localStorage.setItem('ProfilePic',imageUrl)
   const profilePictureUrl = localStorage.getItem('profilePicture');
   if (profilePictureUrl!=null || profilePictureUrl!=undefined){
    return profilePictureUrl
   }
   return ""
  }

}
