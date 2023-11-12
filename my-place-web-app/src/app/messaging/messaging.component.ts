import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Message } from '../User';

@Component({
  selector: 'app-messaging', // Defines the custom HTML tag for this component
  templateUrl: './messaging.component.html', // Links to the HTML template
  styleUrls: ['./messaging.component.css'] // Links to the CSS styles
})
export class MessagingComponent implements OnInit {
  messages: Message[] = []; // Array to store messages
  newMessage: string = ''; // Variable to bind with the input field for new messages
  currentUser = 'john_doe'; // Example current user, this should be dynamically set

  constructor(private userService: UserService) {} // Injects the UserService

  ngOnInit(): void {
    // On component initialization, load messages from local storage
    this.userService.storeMessagesInLocalStorage();
    this.loadMessages();
  }

  loadMessages() {
    // Fetches messages from local storage and filters them based on the current user
    const allMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    this.messages = allMessages.filter((msg: any) => msg.Recipients.includes(this.currentUser))
                               .flatMap((msg: any) => msg.Messages);
  }

  sendMessage() {
    // Function to handle sending a new message
    if (this.newMessage.trim() !== '') {
      const message: Message = {
        sender: this.currentUser,
        content: this.newMessage,
        type: 'text',
        timestamp: new Date().toISOString() // Sets the current timestamp
      };
      this.messages.push(message); // Adds the new message to the messages array
      this.newMessage = ''; // Clears the input field
    }
  }
}
