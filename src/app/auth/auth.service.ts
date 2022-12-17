import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { User } from './user.model';

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhT2dtuW4DzYC6Ioa_BShD7r1w7LKiFzk',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    
  }
}
