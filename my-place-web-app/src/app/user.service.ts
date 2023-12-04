import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/UserFile.json';
  private UserUrl = 'assets/User.Json';
  private blogUrl = 'assets/BlogPost.JSON';
  private messageUrls ='assets/message.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }



  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.messageUrls);
  }

  getUSERS(): Observable<any[]> {
    return this.http.get<any[]>(this.UserUrl);
  }

  getBlog(): Observable<any[]> {
    return this.http.get<any[]>(this.blogUrl);
  }
  

  storeUsersInLocalStorage() {
    this.getUsers().subscribe(data => {
      localStorage.setItem('users', JSON.stringify(data));
    });
  }

  storeUSERSInLocalStorage() {
    this.getUSERS().subscribe(data => {
      localStorage.setItem('Users', JSON.stringify(data));
    });
  }

  storeBlogInLocalStorage() {
    this.getBlog().subscribe(data => {
      localStorage.setItem('Blog', JSON.stringify(data));
    });
  }



  storeMessagesInLocalStorage() {
    this.getMessages().subscribe(data => {
      localStorage.setItem('messages', JSON.stringify(data));
    });
  }
  
}
