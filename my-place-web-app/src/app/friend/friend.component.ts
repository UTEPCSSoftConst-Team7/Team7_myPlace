import { Component,OnInit } from '@angular/core';
import { User,UserBlogPost,BlogPost } from '../User';
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
  ProfileBlogPost: UserBlogPost[] = [];

  constructor(private router: Router,private userService: UserService){ }

  ngOnInit() :void{
    this.grabUser()
    this.grabBlogPost();
  }


  sendBack(){
    this.router.navigateByUrl("/user")
  }

  grabBlogPost() {
    const Blog = localStorage.getItem('Blog')
    if (Blog != undefined) {
      // console.log('B',Blog)
      var profileBlog = JSON.parse(Blog)
      console.log('Blog', profileBlog)
      this.ProfileBlogPost = profileBlog;
      var username = this.ProfileUser.username
      const UserPost = this.ProfileBlogPost.filter(u => u.user == username);
      this.ProfileBlogPost = UserPost
      console.log('u', UserPost)
    }
  }

  grabUser() {
    const profile = localStorage.getItem('friend')
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.ProfileUser = profileUser
    }
    //  this.ProfileUser.profilePicture = "assert/"+this.ProfileUser.profilePicture
  }

  like(post: UserBlogPost) {
    const Blog = localStorage.getItem('Blog')
    var Blogs:BlogPost[]=[];
    if (!post.UserLike) {
      post.likes = post.likes + 1
      post.UserLike = true
      if (Blog != undefined) {
        Blogs = JSON.parse(Blog)
        for (let i = 0; i < Blogs.length; i++) {
          if (Blogs[i].content === post.content) {
            Blogs[i].likes= Blogs[i].likes + 1;
          }
        }
      }
    }

    else {
      post.likes = post.likes - 1
      post.UserLike = false
      if (Blog != undefined) {
        Blogs = JSON.parse(Blog)
        for (let i = 0; i < Blogs.length; i++) {
          if (Blogs[i].content == post.content) {
            Blogs[i].likes= Blogs[i].likes- 1;
          }
        }
      }
    }
    localStorage.setItem('Blog',JSON.stringify(Blogs))


  }

  friend(){
    const profile = localStorage.getItem('profileUser')
    var friendList=false
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.Friend = profileUser
      if(this.Friend.friends!=undefined){
        for(let i =0; i<this.Friend.friends?.length;i++){
          if(this.Friend.friends[i]==this.ProfileUser.username){
            friendList=true
          }
        }
        if(friendList){
          alert('These two user are already friends')
          this.sendBack()
        }
        else{
          alert('these two users are now friends')
          this.Friend.friends.push(this.ProfileUser.username)
          this.ProfileUser.friends?.push(this.Friend.username)
          var storedUsers = localStorage.getItem('Users');
          let users: any[] = [];

          if (storedUsers != null){
            users = JSON.parse(storedUsers);
            for(let i =0; i<users.length;i++){
              if(users[i].username==this.Friend.username){
                users[i].friends.push(this.ProfileUser.username)
              }

              if(users[i].username==this.ProfileUser.username){
                console.log(users[i])
                users[i].friends.push(this.Friend.username)
              }
            }
          }

          localStorage.setItem('profileUser', JSON.stringify(this.Friend));
          localStorage.setItem('friend', JSON.stringify(this.ProfileUser));
          localStorage.setItem('Users', JSON.stringify(users));
          location.reload()
          this.sendBack()
        }
      }
    }
  }
}

