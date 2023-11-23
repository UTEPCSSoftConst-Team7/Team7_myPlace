import { Component,OnInit } from '@angular/core';
import { User,BlogPost,UserBlogPost } from '../User';
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
  user: any;
  showTextArea: boolean = false;
  textAreaContent: string = '';


  constructor(private router: ActivatedRoute,private userService: UserService){ }

  ngOnInit() :void{
   
  this.grabUser()
    // const storedUser = localStorage.getItem('ProfileUser');
    
    // if (storedUser != null){
    //   this.ProfileUser=JSON.parse(storedUser)
    //   // this.user = JSON.parse(storedUser);
    //   var username=this.user.username
    //   this.router.paramMap.subscribe(params => {
    //     const username = params.get(this.user.username); // Access the route parameter 'id'
    //   });
    
    // }

    
  }
  toggleTextArea() {
    this.showTextArea = !this.showTextArea;
  }

  submitText() {
    // Add functionality for submitting the text
    // For example, you can access the text from the textarea
    // this.textAreaContent
    // Perform actions or API calls here

    // var UserPost: UserBlogPost ={
    //   UserLike: false,
    //   User: this.ProfileUser,
    //   content: this.textAreaContent,
    //   likes: 0
    // }
    var Post: BlogPost = {
      User: this.ProfileUser,
      content: this.textAreaContent,
      likes: 0
    }
    console.log('Submitted:', Post);
    console.log('Blog',Post)
    // Reset the text area and hide it
    console.log('blogPost',this.ProfileUser)

    if(this.ProfileUser.blogPosts!=undefined){
      this.ProfileUser.blogPosts.push(this.textAreaContent)
      console.log('blog',this.ProfileUser.blogPosts)
    }
    // if(this.ProfileUser.blogPosts?.length==0){
    //   console.log('blog',this.ProfileUser.blogPosts)
    //   this.ProfileUser.blogPosts.push(this.textAreaContent)
    // }
    console.log('blog',this.ProfileUser.blogPosts)
    this.textAreaContent = '';
    this.showTextArea = false;
  }

  grabUser(){
   const profile= localStorage.getItem('profileUser')
   if (profile!=null || profile!=undefined){
    console.log('p',profile)
    var profileUser = JSON.parse(profile)
    console.log('profile',profileUser)
    this.ProfileUser=profileUser
   }
  //  this.ProfileUser.profilePicture = "assert/"+this.ProfileUser.profilePicture
  }



}
