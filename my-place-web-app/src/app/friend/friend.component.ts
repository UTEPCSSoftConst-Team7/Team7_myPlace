import { Component,OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent  implements OnInit {
  Friend: User ={
    username: 'NicoJ115',
    password: 'adsfa',
    email: 'sdafa'
  }
  ProfileUser: User= {
    username: 'NicoJ115',
    password: 'NicoJ1234',
    email: 'nicoJ115@example.com',
    bio: 'I am a god',
    profilePicture: '',
    blogPosts: ["Playing Video Games","Coding skynet","Going to Camp Flogna","Please someone hire me I dont want to die at mcdonalds."],
    friends: [],
  };

  constructor(private router: Router,private userService: UserService){ }

  ngOnInit() :void{}


  sendBack(){
    this.router.navigateByUrl("/user")
  }
}
