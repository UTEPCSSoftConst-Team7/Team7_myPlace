import { Component, OnInit } from '@angular/core';
import { User, UserBlogPost, BlogPost } from '../User';
import { UserService } from '../user.service';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  Friend: User = {
    username: 'NicoJ115',
    password: 'adsfa',
    email: 'sdafa',
    closeFriend: [],
    Blocked: []
  }
  ProfileUser: User = {
    username: 'NicoJ115',
    password: 'NicoJ1234',
    email: 'nicoJ115@example.com',
    bio: 'I am a god',
    profilePicture: '',
    blogPosts: ["Playing Video Games", "Coding skynet", "Going to Camp Flogna", "Please someone hire me I dont want to die at mcdonalds."],
    friends: [],
    closeFriend: [],
    Blocked: []
  };
  ProfileBlogPost: UserBlogPost[] = [];
  Blocked: boolean =false

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.grabUser()
    this.grabBlogPost();
  }


  sendBack() {
    this.router.navigateByUrl("/user")
  }

  grabBlogPost() {
    if(this.Blocked){
      this.ProfileBlogPost=[]
      return
    }
    const Blog = localStorage.getItem('Blog')
    if (Blog != undefined) {
      // console.log('B',Blog)
      var profileBlog = JSON.parse(Blog)
      console.log('Blog', profileBlog)
      this.ProfileBlogPost = profileBlog;
      var username = this.ProfileUser.username
      var UserPost = this.ProfileBlogPost.filter(u => u.user == username);

      const profile = localStorage.getItem('profileUser')
      if (profile != null || profile != undefined) {
        console.log('p', profile)
        var FriendUser:User = JSON.parse(profile)
        var ClosefriendList = false
        if (this.ProfileUser.closeFriend != undefined) {
          for (let i = 0; i < this.ProfileUser.closeFriend?.length; i++) {
            if(this.ProfileUser.closeFriend[i]==FriendUser.username){
                ClosefriendList = true
            }
          }

        }

        if(ClosefriendList==true){
          UserPost = this.ProfileBlogPost.filter(u => u.user == username);
        }
        else{
          UserPost = this.ProfileBlogPost.filter(u => u.user == username);
          UserPost = this.ProfileBlogPost.filter(u => u.CloseFriend == false);
        }
        this.ProfileBlogPost = UserPost
        console.log('u', UserPost)
      }
    }
  }

  grabUser() {
    const profile = localStorage.getItem('friend')
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.ProfileUser = profileUser
      this.BlockedUser()
    }
    //  this.ProfileUser.profilePicture = "assert/"+this.ProfileUser.profilePicture
  }

  BlockedUser(){
    const profile = localStorage.getItem('profileUser')
    var friendList = false
    console.log(profile)
    if (profile != null || profile != undefined) {
      var profileUser:User = JSON.parse(profile)
      console.log('pr',profileUser)
      if(profileUser.Blocked!= undefined){
        for(let i=0;i<profileUser.Blocked.length;i++){
          if(this.ProfileUser.username==profileUser.Blocked[i]){
            this.Blocked=true
            this.ProfileUser.username='Blocked'
            this.ProfileUser.bio='This user is blocked'
            this.ProfileUser.profilePicture=''
          }
        }
      }
    }
  }

  like(post: UserBlogPost) {
    const Blog = localStorage.getItem('Blog')
    var Blogs: BlogPost[] = [];
    if (!post.UserLike) {
      post.likes = post.likes + 1
      post.UserLike = true
      if (Blog != undefined) {
        Blogs = JSON.parse(Blog)
        for (let i = 0; i < Blogs.length; i++) {
          if (Blogs[i].content === post.content) {
            Blogs[i].likes = Blogs[i].likes + 1;
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
            Blogs[i].likes = Blogs[i].likes - 1;
          }
        }
      }
    }
    localStorage.setItem('Blog', JSON.stringify(Blogs))


  }

  blocked(){
    var Friend=this.ProfileUser.username
    if(Friend=='Team_MyPlace'){
      alert("Cant delete admin account")
      return
    }
    alert('This will block the user from viewing your activity as well as block you from viewing theirs')
    if (this.Friend.Blocked==undefined){
      this.Friend.Blocked=[Friend]

    }
    else{
      this.Friend.Blocked.push(Friend)
    }
    if(this.Friend.friends!=undefined){
      this.Friend.friends = this.Friend.friends .filter((item: String) => item != Friend);
    }
    this.Friend.closeFriend = this.Friend.closeFriend .filter((item: String) => item != Friend);

    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0; i<users.length;i++){
        if(users[i].username==this.Friend.username){
          if (users[i].Blocked==undefined){
            users[i].Blocked=[Friend]
          }
          else{
            users[i].Blocked.push(Friend)
          }
          if(this.Friend.friends!=undefined){
            users[i].friends = this.Friend.friends .filter((item: String) => item != Friend);
            users[i].closeFriend = this.Friend.closeFriend .filter((item: String) => item != Friend);
          }
        }
      }
    }
    localStorage.setItem('Users', JSON.stringify(users));
    localStorage.setItem('profileUser', JSON.stringify(this.Friend));
    location.reload()
  }

  friend() {
    const profile = localStorage.getItem('profileUser')
    var friendList = false
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.Friend = profileUser
      console.log(this.Friend.username)
      if(this.ProfileUser.username=='Blocked'){
        alert('Stop trying to add them back as punishment you will have a blocked in your friendlist!')
      }

      if (this.Friend.friends != undefined) {
        for (let i = 0; i < this.Friend.friends?.length; i++) {
          if (this.Friend.friends[i] == this.ProfileUser.username) {
            friendList = true
          }
        }
        if (friendList) {
          alert('These two user are already friends')
          this.sendBack()
        }
        else {
          alert('these two users are now friends')
          this.Friend.friends.push(this.ProfileUser.username)
          this.ProfileUser.friends?.push(this.Friend.username)
          var storedUsers = localStorage.getItem('Users');
          let users: any[] = [];

          if (storedUsers != null) {
            users = JSON.parse(storedUsers);
            for (let i = 0; i < users.length; i++) {
              if (users[i].username == this.Friend.username) {
                users[i].friends.push(this.ProfileUser.username)
              }

              if (users[i].username == this.ProfileUser.username) {
                console.log(users[i])
                users[i].friends.push(this.Friend.username)
              }
            }
          }

          localStorage.setItem('profileUser', JSON.stringify(this.Friend));
          localStorage.setItem('friend', JSON.stringify(this.ProfileUser));
          localStorage.setItem('Users', JSON.stringify(users));
          // location.reload()
          this.sendBack()
        }
      }
    }
  }
}

