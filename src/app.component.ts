import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';

import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  previousUrl: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { 

  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      // this.roles = user.roles;
      // this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    // this.router.navigate(['/login']);
    window.location.reload();
  }
}