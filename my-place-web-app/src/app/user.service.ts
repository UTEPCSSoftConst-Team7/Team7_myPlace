import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/UserFile.json';
  private messageUrl = 'assets/messageFile.json'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.messageUrl);
  }

  storeUsersInLocalStorage() {
    this.getUsers().subscribe(data => {
      localStorage.setItem('users', JSON.stringify(data));
    });
  }

  storeMessagesInLocalStorage() {
    this.getMessages().subscribe(data => {
      localStorage.setItem('messages', JSON.stringify(data));
    });
  }
  
}