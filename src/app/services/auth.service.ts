import { HttpClient } from '@angular/common/http';
import { UrlCodec } from '@angular/common/upgrade';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(newUser: any) {

    this.http.post('http://localhost:3000/api/auth/register', newUser)
  
  }
}
