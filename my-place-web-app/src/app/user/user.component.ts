import { Component, OnInit } from '@angular/core';
import { User, BlogPost, UserBlogPost } from '../User';
import { UserService } from '../user.service';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Friend: User = {
    username: 'NicoJ115',
    password: 'adsfa',
    email: 'sdafa'
  }
  ProfileUser: User = {
    username: 'isaba3lla',
    password: 'isaba3llaPass',
    email: 'isaba3lla@example.com',
    bio: 'Art and design lover',
    profilePicture: '',
    blogPosts: ["Painting progress", "Coding my project", "Going to Camp Flogna", "Ban for Ban who work at MaterCard."],
    friends: [],
  };
  ProfileBlogPost: UserBlogPost[] = [];
  user: any;
  showTextArea: boolean = false;
  textAreaContent: string = '';
  showBioArea:boolean = false;
  NewBio: string = '';


  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.grabUser()
    this.grabBlogPost();



  }
  toggleTextArea() {
    this.showTextArea = !this.showTextArea;
  }
  toggleBioArea() {
    this.showBioArea = !this.showBioArea;
  }

  submitText() {
    // Add functionality for submitting the text
    // For example, you can access the text from the textarea
    // this.textAreaContent
    // Perform actions or API calls here


    var Post: BlogPost = {
      user: this.ProfileUser.username,
      content: this.textAreaContent,
      likes: 0
    }
    console.log('Submitted:', Post);
    // Reset the text area and hide it
    console.log('blogPost', this.ProfileUser)
    const Blog = localStorage.getItem('Blog')
    if (Blog != undefined) {
      // console.log('B',Blog)
      var profileBlog = JSON.parse(Blog)
      profileBlog.push(Post)
      console.log(profileBlog)
      localStorage.setItem('Blog', JSON.stringify(profileBlog));
      location.reload()
    }


    // console.log('blog', this.ProfileUser.blogPosts)
    this.textAreaContent = '';
    this.showTextArea = false;
  }

  ChangeBio(){
    this.ProfileUser.bio=this.NewBio
    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0;i<users.length;i++){
        if(users[i].username==this.ProfileUser.username){
          users[i].bio=this.NewBio;
          break;
        }
      }
      localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));
      localStorage.setItem('Users', JSON.stringify(users));
      location.reload()
    }
  }

  grabUser() {
    const profile = localStorage.getItem('profileUser')
    if (profile != null || profile != undefined) {
      console.log('p', profile)
      var profileUser = JSON.parse(profile)
      console.log('profile', profileUser)
      this.ProfileUser = profileUser
    }
    //  this.ProfileUser.profilePicture = "assert/"+this.ProfileUser.profilePicture
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



}
