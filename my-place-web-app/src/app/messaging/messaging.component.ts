import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  // Define the messages property as an array
  messages = [
    { username: 'User1', text: 'Hello, how are you?', fromMe: true },
    { username: 'User2', text: 'I am fine, thanks! And you?', fromMe: false },
    // ... other messages
  ];
  

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Other methods and logic for your component
}

