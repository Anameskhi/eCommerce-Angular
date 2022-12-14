import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthRoutingModule } from 'src/app/pages/auth/auth-routing.module';
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
    .pipe(
      tap((authResponse: AuthResponse)=>{
        this.setAuth(authResponse)
      })
    )
  }

  signIn(params: Auth): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.firebaseAuthUrl}signInWithPassword?key=${this.apiKey}`,params)
  .pipe(
    tap((authResponse: AuthResponse)=>{
      this.setAuth(authResponse)
    })
  )
  }

  setAuth(authResponse: AuthResponse):void{
    localStorage.setItem('token',authResponse.idToken)
    localStorage.setItem('refreshtoken',authResponse.refreshToken)
    localStorage.setItem('email',authResponse.email)

  }
  get isAuth():boolean{
    return !!localStorage.getItem('token')
  }

  logout(): void{
    localStorage.clear()
  }
  
}
