import { Component, OnInit } from '@angular/core';
import { User, BlogPost, UserBlogPost } from '../User';
import { UserService } from '../user.service';
import { MyServiceService } from '../my-service.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  ProfileUser: User = {
    username: 'isaba3lla',
    password: 'isaba3llaPass',
    email: 'isaba3lla@example.com',
    bio: 'Art and design lover',
    profilePicture: '',
    blogPosts: [
      'Painting progress',
      'Coding my project',
      'Going to Camp Flogna',
      'Ban for Ban who work at MaterCard.',
    ],
    friends: [],
    closeFriend: [],
    Blocked: [],
  };

  ProfileBlogPost: UserBlogPost[] = [];
  user: any;
  showTextArea: boolean = false;
  showFrindPost: boolean = false;
  textAreaContent: string = '';
  textAreaCloseContent: string = '';
  showBioArea: boolean = false;
  NewBio: string = '';

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.grabUser();
    this.grabBlogPost();
  }

  toggleTextArea() {
    this.showTextArea = !this.showTextArea;
  }

  toggleBioArea() {
    this.showBioArea = !this.showBioArea;
  }

  toggleFriendTextBox() {
    this.showFrindPost = !this.showFrindPost;
  }

  /**
   * Perform actions or API calls here
   */
  submitText() {
    var Post: BlogPost = {
      user: this.ProfileUser.username,
      content: this.textAreaContent,
      likes: 0,
      CloseFriend: false,
    };

    const Blog = localStorage.getItem('Blog');
    if (Blog != undefined) {
      var profileBlog = JSON.parse(Blog);
      profileBlog.push(Post);
      console.log(profileBlog);
      localStorage.setItem('Blog', JSON.stringify(profileBlog));
      location.reload();
    }
    this.textAreaContent = '';
    this.showTextArea = false;
  }

  submitCloseFriendText() {
    var Post: BlogPost = {
      user: this.ProfileUser.username,
      content: this.textAreaCloseContent,
      likes: 0,
      CloseFriend: true,
    };

    const Blog = localStorage.getItem('Blog');
    if (Blog != undefined) {
      var profileBlog = JSON.parse(Blog);
      profileBlog.push(Post);
      console.log(profileBlog);
      localStorage.setItem('Blog', JSON.stringify(profileBlog));
      location.reload();
    }

    this.textAreaCloseContent = '';
    this.showFrindPost = false;
  }

  ChangeBio() {
    this.ProfileUser.bio = this.NewBio;
    var storedUsers = localStorage.getItem('Users');
    let users: any[] = [];

    if (storedUsers != null) {
      users = JSON.parse(storedUsers);
      for (let i = 0; i < users.length; i++) {
        if (users[i].username == this.ProfileUser.username) {
          users[i].bio = this.NewBio;
          break;
        }
      }
      localStorage.setItem('profileUser', JSON.stringify(this.ProfileUser));
      localStorage.setItem('Users', JSON.stringify(users));
      location.reload();
    }
  }

  grabUser() {
    const profile = localStorage.getItem('profileUser');
    if (profile) {
      var profileUser = JSON.parse(profile);
      this.ProfileUser = profileUser;
    }
  }

  grabBlogPost() {
    const Blog = localStorage.getItem('Blog');
    if (Blog != undefined) {
      var profileBlog = JSON.parse(Blog);
      console.log('Blog', profileBlog);
      this.ProfileBlogPost = profileBlog;
      var username = this.ProfileUser.username;
      const UserPost = this.ProfileBlogPost.filter((u) => u.user == username);
      this.ProfileBlogPost = UserPost;
      console.log('u', UserPost);
    }
  }

  like(post: UserBlogPost) {
    const Blog = localStorage.getItem('Blog');
    var Blogs: BlogPost[] = [];
    if (!post.UserLike) {
      post.likes = post.likes + 1;
      post.UserLike = true;
      if (Blog != undefined) {
        Blogs = JSON.parse(Blog);
        for (let i = 0; i < Blogs.length; i++) {
          if (Blogs[i].content === post.content) {
            Blogs[i].likes = Blogs[i].likes + 1;
          }
        }
      }
    } else {
      post.likes = post.likes - 1;
      post.UserLike = false;
      if (Blog != undefined) {
        Blogs = JSON.parse(Blog);
        for (let i = 0; i < Blogs.length; i++) {
          if (Blogs[i].content == post.content) {
            Blogs[i].likes = Blogs[i].likes - 1;
          }
        }
      }
    }
    localStorage.setItem('Blog', JSON.stringify(Blogs));
  }

  delete(post: UserBlogPost) {
    const Blog = localStorage.getItem('Blog');
    console.log(post);
    if (Blog != undefined) {
      var profileBlog = JSON.parse(Blog);
      profileBlog = profileBlog.filter(
        (item: UserBlogPost) => item.content != post.content
      );
      console.log('blogs', profileBlog);
      localStorage.setItem('Blog', JSON.stringify(profileBlog));
      location.reload();
    }
  }
}
