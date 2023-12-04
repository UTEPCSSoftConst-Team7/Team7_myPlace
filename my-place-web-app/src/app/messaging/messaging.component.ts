import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User, Messages, Conversation} from '../User';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
})
export class MessagingComponent implements OnInit {
  Converstion: Conversation[] = []
  Participants: String[] = []
  Specific: Conversation = {
    participants: [],
    messages: []
  }
  ProfileUser: User = {
    username: '',
    password: '',
    email: '',
    closeFriend: [],
    Blocked: []
  }

  sentMessage: string = ''

  ngOnInit() {
    this.getMessaging()
    this.getParticipants()
    this.getSpecificMessages()
    this.grabUser()
    this.changeTimeStamp()
    this.getDate()
    //2023-12-01T15:30:00.000Z

    // this.changeTimeStamp('2023-12-01 T18:25:00')
  }

  constructor(private userService: UserService, private router: Router) {

  }

  getMessaging() {
    const messaging = localStorage.getItem('messages')
    if (messaging != undefined) {
      this.Converstion = JSON.parse(messaging)
      console.log(this.Converstion)
    }

  }

  getParticipants() {
    const participants = localStorage.getItem('participants')
    if (participants != undefined) {
      this.Participants = JSON.parse(participants)
      console.log(this.Participants)
    }
  }

  getSpecificMessages() {
    for (let i = 0; i < this.Converstion.length; i++) {
      const conversation = this.Converstion[i]

      const conversationParticipants = conversation.participants.sort();
      const providedParticipants = this.Participants.sort();

      const isMatch = JSON.stringify(conversationParticipants) === JSON.stringify(providedParticipants);
      if (isMatch) {
        this.Specific = conversation;

        break; // Found the specific conversation, so exit the loop
      }
      else {
      }
    }

  }

  sendMessage() {
    const Messages: Messages = {
      sender: this.ProfileUser.username,
      timestamp: this.getDate(),
      content: this.sentMessage,
      
    }
    if (this.Specific.messages.length == 0) {

      const Convo: Conversation = {
        participants: this.Participants,
        messages: [Messages]
      }
      this.Specific=Convo
      this.ReturnTimeStamp()
      this.Converstion.push(this.Specific)
      localStorage.setItem('messages',JSON.stringify(this.Converstion))


    }
    else {

      this.Specific.messages.push(Messages)

      for (let i = 0; i < this.Converstion.length; i++) {
        const conversation = this.Converstion[i]
  
        const conversationParticipants = conversation.participants.sort();
        const providedParticipants = this.Participants.sort();
  
        const isMatch = JSON.stringify(conversationParticipants) === JSON.stringify(providedParticipants);
        if (isMatch) {
          this.ReturnTimeStamp()
          this.Converstion[i]=this.Specific
          localStorage.setItem('messages',JSON.stringify(this.Converstion))
          break; // Found the specific conversation, so exit the loop
        }
      }      
    }
    location.reload()
  }

  grabUser() {
    const profile = localStorage.getItem('profileUser')
    if (profile != null || profile != undefined) {
      var profileUser = JSON.parse(profile)
      // console.log('profile', profileUser)
      this.ProfileUser = profileUser
    }
  }

  TimeStamp(timestamp: string) {
    // 2023-12-01T18:25:00
    const dateStr = timestamp.slice(0, 10);
    const minutes = timestamp.slice(14, 17);
    var hours = timestamp.slice(12, 14);
    let hour = parseInt(hours, 10)
    const AMPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12
    const date = `${dateStr}`;
    const time = `${hour}:${minutes} ${AMPM}`;
    const TimeStamp = time + ' ' + date

    console.log(TimeStamp)
    return (TimeStamp)


  }

  TimeStampReturn(timestamp: string) {
    // 2023-12-01T18:25:00
    const dateString = timestamp;
    const dateParts = dateString.split(' '); // Split the string by space
    
    
    const time = dateParts[0]; 
    const ampm = dateParts[1]; 
    const date = dateParts[2]; 
    
    
    const [hoursStr, minutesStr] = time.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    
    if (ampm === 'PM' && hours < 12) {
      hours += 12; 
    } else if (ampm === 'AM' && hours === 12) {
      hours = 0;
    }

    const formattedDate = new Date(`${date}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00Z`);

    
    const isoTimestamp = formattedDate.toISOString().slice(0, 19);
    
    return isoTimestamp
    


  }

  changeTimeStamp() {
    for (let i = 0; i < this.Specific.messages.length; i++) {
      var Timestamp = this.Specific.messages[i].timestamp
      Timestamp = this.TimeStamp(Timestamp)
      this.Specific.messages[i].timestamp = Timestamp
    }
  }

  ReturnTimeStamp() {
    for (let i = 0; i < this.Specific.messages.length; i++) {
      var Timestamp = this.Specific.messages[i].timestamp
      Timestamp = this.TimeStampReturn(Timestamp)
      this.Specific.messages[i].timestamp = Timestamp
    }
  }



  getDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Create the timestamp in the specified format
    var timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    const dateStr = timestamp.slice(0, 10);
    const minute = timestamp.slice(15, 17);
    var hourss = timestamp.slice(12, 14);
    let hour = parseInt(hourss, 10)
    const AMPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12

    const date = `${dateStr}`;
    const time = `${hour}:${minutes} ${AMPM}`;
    const TimeStamp = time + ' ' + date

    return (TimeStamp)

  }



  sendBack() {
    this.router.navigateByUrl("/user")
  }


  sendMessageLog() {
    this.router.navigateByUrl("/user/messagingLog")
  }
}
