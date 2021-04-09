import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private URL = '/api'
  private URL = 'http://localhost:8080/api'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }
  
  signUp(user: any){
    return this.http.post<any>(this.URL + '/signup', user);
  }

   login(user: any){
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn(){ //*Comprobar si esta logeado
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}
