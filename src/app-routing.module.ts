import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { HallDetailComponent } from './hall-detail/hall-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cinemas', component: CinemaListComponent },
  { path: 'cinemas/:cinemaId', component: CinemaDetailComponent},
  { path: 'halls/:hallId', component: HallDetailComponent},
  { path: 'movies/:movieId', component: MovieDetailComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }