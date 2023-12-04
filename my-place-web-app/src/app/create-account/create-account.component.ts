import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  bio: string = '';
  email: string = '';
  randomNumber: number | undefined;

  private readonly profilePictures = [ // Sample set of profile pictures
    "assets/among.png",
    "assets/cat.png",
    "assets/catFist.png",
    "assets/dice.png",
    "assets/joji.png",
    "assets/mfDoom.png",
    "assets/pizzabella.png",
    "assets/spiderman.png",
    "assets/sandy.png",
    "assets/peopleiconmp.png" // Default picture
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    try {
      const storedUsers = localStorage.getItem('Users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        console.log(users);
      }
    } catch (error) {
      console.error('Error parsing users from local storage', error);
    }
  }

  createNewUser(): void {
    if (this.areInputsValid()) {
      if (this.password === this.confirmpassword) {
        this.addNewUserInfo();
      } else {
        alert("Please make sure that the passwords match.");
      }
    } else {
      alert("Please fill out all fields before moving forward.");
    }
  }


  private areInputsValid(): boolean {
    return this.username !== '' && this.password !== '' && this.email !== '' && this.bio !== '';
  }

  private addNewUserInfo(): void {
    const newUser: User = {
      username: this.username,
      password: this.password,
      email: this.email,
      bio: this.bio,
      profilePicture: this.getProfilePic(),
      friends: ['Team_MyPlace'],
      closeFriend: [],
      Blocked: []
    };

    try {
      const storedUsers = localStorage.getItem('Users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      users.push(newUser);
      localStorage.setItem('Users', JSON.stringify(users));
      localStorage.setItem('profileUser', JSON.stringify(newUser));
      setTimeout(() => this.router.navigateByUrl("/user"), 500);
    } catch (error) {
      console.error('Error saving user to local storage', error);
    }
  }

  private getProfilePic(): string {
    if (this.profilePictures && this.profilePictures.length) {
      this.randomNumber = Math.floor(Math.random() * 9);
      return this.profilePictures[this.randomNumber] || this.profilePictures[9];
    } else {
      return this.profilePictures[9];
    }
  }
}
