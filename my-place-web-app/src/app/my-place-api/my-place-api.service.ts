import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class MyPlaceApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getUsers(): Observable<User[]> {
    return this.http
      .get(`${API_URL}/users`)
      .catch(MyPlaceApiService._handleError);
