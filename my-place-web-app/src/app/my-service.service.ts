import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Invoker } from './invoker';
import { Command } from './command';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) {
    const invoker = new Invoker();
  }
}



