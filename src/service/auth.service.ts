import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
    }),
    observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

   login(username: string, password: string): any {
    return this.http.post<any>(AUTH_API + 'login?login=' + username + '&password=' + password, {
      username,
      password
    },
     httpOptions);
  }

  
  register(login: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'api/v1/users/register', {
      login,
      email,
      password
    }, httpOptions);
  }
}   