import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { HallDetailComponent } from './hall-detail/hall-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CinemaListComponent,
    CinemaDetailComponent,
    HallDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }