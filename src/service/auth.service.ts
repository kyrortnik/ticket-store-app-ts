import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/x-www-form-urlencoded'
    }),
  observe:'response'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

   login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login?login=' + username + '&password=' + password, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', /*{
      username,
      email,
      password
    },*/ httpOptions);
  }
}

    // return this.http.post(AUTH_API + 'login', {
    
      // username,
      // password
    