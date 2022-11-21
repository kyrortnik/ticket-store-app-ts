import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';

import { Observable } from 'rxjs';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
   private tokenStorage: TokenStorageService,
   private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      (resp : HttpResponse<any>) => {

        this.tokenStorage.saveToken(resp.headers.get('Authorization'));
        // this.tokenStorage.saveUser(map.get('user') as string);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/cinemas']).then(() => {
        window.location.reload();
     });    
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}