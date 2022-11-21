import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { HallDetailComponent } from './hall-detail/hall-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardUserComponent } from './board-user/board-user.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
  { path: 'cinemas', component: CinemaListComponent },
  { path: 'cinema/:cinemaId', component: CinemaDetailComponent},
  { path: 'halls/:hallId', component: HallDetailComponent},
  { path: 'movies/:movieId', component: MovieDetailComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }