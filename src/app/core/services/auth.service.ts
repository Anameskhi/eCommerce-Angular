import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, AuthResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuthUrl?: string ;
  apiKey?: string

  constructor(
    private http: HttpClient
  ) { 
    this.firebaseAuthUrl = environment.firebaseAuthUrl;
    this.apiKey = 'AIzaSyCxmHkqSmKio5l3ds_oJ4fVGfwsGtaFvkE'
  }

  signUp(params: Auth): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.firebaseAuthUrl}signUp?key=${this.apiKey}`,params)
  }

  signIn(params: Auth): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.firebaseAuthUrl}signInWithPassword?key=${this.apiKey}`,params)
  }
}
