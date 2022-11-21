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
         console.log(resp);
         console.log(resp.headers.get('Authorization'));

        this.tokenStorage.saveToken(resp.headers.get('Authorization'));
        // this.tokenStorage.saveUser(map.get('user') as string);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        // window.location.reload();
        this.router.navigate(['/cinemas']);
      }/*,
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }*/
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}