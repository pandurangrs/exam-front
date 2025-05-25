import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { UserDto } from '../core/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  //add user
  public addUser(userDto:any){
    return this.http.post(`${baseUrl}/users`,userDto)
  }
}
