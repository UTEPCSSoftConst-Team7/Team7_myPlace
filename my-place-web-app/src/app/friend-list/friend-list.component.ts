import { Component,OnInit } from '@angular/core';
import { User,UserBlogPost } from '../User';
import { UserService } from '../user.service';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  ProfileUser: User = {
    username: '',
    password: '',
    email: '',
    friends:[],
    closeFriend: [],
    Blocked: []
  }
  FriendList:User[]=[]
  CloseFriend:String[]=[]
  Blocked:User[]=[]

  constructor(private router: Router,private userService: UserService){
    this.grabUser()
  }

  ngOnInit(): void {
      
  }

  sendBack(){
    this.router.navigateByUrl("/user")
  }

  grabUser(){
    const profile = localStorage.getItem('profileUser')
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.ProfileUser = profileUser
    }
  }

  removeFriend(){

  }

  deleteUsers(){
    const Blog = localStorage.getItem('Users')

    if (Blog != undefined) {
      // console.log('B',Blog)
      var profileBlog = JSON.parse(Blog)
      profileBlog = profileBlog.filter((item: User) => item.username != this.ProfileUser.username);
      localStorage.setItem('Users', JSON.stringify(profileBlog));
      this.router.navigateByUrl('homepage')
    }
  }

  closeFrined(Friend:String){
    if (this.ProfileUser.closeFriend==undefined){
      this.ProfileUser.closeFriend=[Friend]
    }
    else{
      this.ProfileUser.closeFriend.push(Friend)
    }
    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0; i<users.length;i++){
        if(users[i].username==this.ProfileUser.username){
          if (users[i].closeFriend==undefined){
            users[i].closeFriend=[Friend]
          }
          else{
            users[i].closeFriend.push(Friend)
          }
        }
      }
    }
    localStorage.setItem('Users', JSON.stringify(users));
    localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));

  }

  RemoveFrined(Friend:String){
    if(Friend=='Team_MyPlace'){
      alert("Cant delete admin account")
      return
    }
    if(this.ProfileUser.friends!=undefined){
    this.ProfileUser.friends = this.ProfileUser.friends .filter((item: String) => item != Friend);
    }
    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0; i<users.length;i++){
        if(users[i].username==this.ProfileUser.username){
          if (users[i].friend==Friend){
            if(this.ProfileUser.friends!=undefined){
              users[i].friend= this.ProfileUser.friends
            }
          }
        }
      }
    }
    localStorage.setItem('Users', JSON.stringify(users));
    localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));
  }

  RemovecloseFrined(Friend:String){
    this.ProfileUser.closeFriend = this.ProfileUser.closeFriend .filter((item: String) => item != Friend);
    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0; i<users.length;i++){
        if(users[i].username==this.ProfileUser.username){
          if (users[i].closeFriend==Friend){
            users[i].closeFriend= this.ProfileUser.closeFriend .filter((item: String) => item != Friend);
          }
        }
      }
    }
    localStorage.setItem('Users', JSON.stringify(users));
    localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));
  }


  blocked(Friend:String){
    if(Friend=='Team_MyPlace'){
      alert("Cant delete admin account")
      return
    }
    alert('This will block the user from viewing your activity as well as block you from viewing theirs')
    if (this.ProfileUser.Blocked==undefined){
      this.ProfileUser.Blocked=[Friend]

    }
    else{
      this.ProfileUser.Blocked.push(Friend)
    }
    if(this.ProfileUser.friends!=undefined){
      this.ProfileUser.friends = this.ProfileUser.friends .filter((item: String) => item != Friend);
    }
    if(this.ProfileUser.closeFriend!=undefined){
      this.ProfileUser.closeFriend = this.ProfileUser.closeFriend .filter((item: String) => item != Friend);
    }

    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0; i<users.length;i++){
        if(users[i].username==this.ProfileUser.username){
          if (users[i].Blocked==undefined){
            users[i].Blocked=[Friend]
          }
          else{
            users[i].Blocked.push(Friend)
          }
          if(this.ProfileUser.friends!=undefined){
            users[i].friends = this.ProfileUser.friends 
            users[i].closeFriend = this.ProfileUser.closeFriend
          }
        }
      }
    }
    console.log(this.ProfileUser)
    localStorage.setItem('Users', JSON.stringify(users));
    localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));
  }

  unblock(friend:String){
    this.ProfileUser.Blocked = this.ProfileUser.Blocked .filter((item: String) => item != friend);

    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0; i<users.length;i++){
        if(users[i].username==this.ProfileUser.username){
          if (users[i].Blocked==friend){
            users[i].Blocked= this.ProfileUser.Blocked .filter((item: String) => item != friend);
          }
        }
      }
    }
    localStorage.setItem('Users', JSON.stringify(users));
    localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));
  }

}
