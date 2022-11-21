import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

import { TokenStorageService } from '../service/token-storage.service';

import { Router,  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    // this.authService.register(username, email, password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.router.navigate(['/cinemas']).then(() => {
    //     window.location.reload();
    //     });    
    //   }
    // );

     this.authService.register(username, email, password).subscribe(
      (resp: HttpResponse<any>) => {

        this.tokenStorage.saveToken(resp.headers.get('Autorization'));
        // console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/cinemas']).then(() => {
        window.location.reload();
        });    
      }
    );
  }
}