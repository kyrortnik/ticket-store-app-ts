import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { TicketService } from '../service/ticket.service';
import { HallDetailComponent } from '../hall-detail/hall-detail.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';


export class TicketDetailComponent {

    id: number;
    hallDTO: HallDetailComponent;
    movieDTO: MovieDetailComponent;
    sessionDateTime: string;

  constructor() {}
}
