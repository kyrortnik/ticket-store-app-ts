import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { TicketService } from '../service/ticket.service';
import { HallDetailComponent } from '../hall-detail/hall-detail.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// @Component({
//   selector: 'movie-detail'
//   // templateUrl: './movie-detail.component.html'
//   // styleUrls: ['./cinema-list.component.css']
// })
export class TicketDetailComponent {

    id: number;
    hallDTO: HallDetailComponent;
    movieDTO: MovieDetailComponent;
    sessionDateTime: string;

  // movies: MovieDetailComponent[];
  // has3DSupport: boolean;
  // hasIMAXSupport: boolean;
  // dtOpened : string = '';

  constructor() { }



  // ngOnInit(): void {

  //   this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));
  //   this.hallId =  Number(this.route.snapshot.paramMap.get('hallId'));
  //   this.sessionDateTime = '2022-12-17T03:24:00';

  //   this.movieService.getOne(this.movieId).subscribe(
  //       data => {
  //           this.posterLink = data.posterLink;
  //           this.id = data.id;
  //           this.title = data.title;
  //           // this.movies = data.moviesInRotation;
  //           this.length = data.length;
  //           // this.hasIMAXSupport = data.hasIMAXSupport;
  //       }/*,
  //       err => {
  //           // this.content = JSON.parse(err.error).message;
  //       }*/
  //   );

  //   //  this.route.queryParams.subscribe(params => {
  //   //   this.id = params['id'];
  //   // });
  //   // this.cinemaService.getOne(id).subscribe(
  // }

  // onSubmit() : void {

  //   this.ticketService.createTicket(this.movieId, this.hallId, this.sessionDateTime)
  //   .subscribe(
  //       (data : any)=> {
  //       this.ticket = data;
  //       console.log(this.ticket);
  //     });
  // }
}
