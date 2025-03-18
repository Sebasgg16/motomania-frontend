import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Response } from '../interfaces/response'
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(newUser: User): Observable<Response<User>> {
    return this.http.post<Response<User>>('http://localhost:3000/api/auth/register', newUser);
  }

  loginUser(credentials: User): Observable<Response<User>> {
    return this.http.post<Response<User>>('http://localhost:3000/api/auth/login', credentials);
  }

  verifyAuthenticateUser(): Observable<Response<User>> {
    return this.http.get<Response<User>>('http://localhost:3000/api/auth/re-new-token', {
      headers:
        this.getHeaders() })
        .pipe(tap((data) => {
      console.log(data)
      },
      catchError(() => { return of(false) })
    ))

  }
  getHeaders() {
    const token = localStorage.getItem('token') ?? '';
    return new HttpHeaders().set('X-Token', token!);
  }
}
