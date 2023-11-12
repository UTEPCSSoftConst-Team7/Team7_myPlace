import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Adjust the path as necessary

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messageGroups: any[] = []; // Define the property here

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadMessageGroups();
  }

  loadMessageGroups() {
    // Logic to load and process message groups
    this.userService.getMessages().subscribe(messages => {
      // Process the messages to create message groups
      // This is a placeholder logic. You need to implement the actual logic
      // to group messages and extract the necessary details.
      this.messageGroups = this.processMessages(messages);
    });
  }

  processMessages(messages: any[]): any[] {
    // Implement the logic to process messages and return an array of message groups
    // Each group should have 'participants' and 'lastMessage' properties
    // This is just a placeholder function. You need to fill in the logic.
    return [];
  }
}
