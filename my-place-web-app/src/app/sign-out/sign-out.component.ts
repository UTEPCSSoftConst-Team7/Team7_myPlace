import { Component, OnInit } from '@angular/core';
import 'firebase/database';



@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
    // route to landing page with hard reload
    window.location.href = '/';

    //this.sendLocalStorageToFirebase();
    //clear local storage
  }

  /*
  sendLocalStorageToFirebase() {
    const localStorageData = {...localStorage};
    const firebase = require('firebase');
    const firebaseConfig = {
      apiKey: "AIzaSyB-9f4KX4hV9k7Zq3g3I0Nz0K3qX0a5KcU",
      authDomain: "my-place-7f6d1.firebaseapp.com",
      databaseURL: "https://my-place-7f6d1-default-rtdb.firebaseio.com",
      projectId: "my-place-7f6d1",
      storageBucket: "my-place-7f6d1.appspot.com",
      messagingSenderId: "105969495927",
      appId: "1:105969495927:web:6a5b1d3b0c3b4e7f0e3f8f",
      measurementId: "G-8ZJZ6XKQ2J"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    const ref = database.ref('users');
    ref.push(localStorageData);
    localStorage.clear();
  }
  */
}
