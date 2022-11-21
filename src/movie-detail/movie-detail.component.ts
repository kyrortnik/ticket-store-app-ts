import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { TicketService } from '../service/ticket.service';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import {TicketDTO} from '../dto/ticketDTO';
import {MovieDTO} from '../dto/movieDTO';
import {HallDTO} from '../dto/hallDTO';
import {SeatDTO} from '../dto/seatDTO';
import {RowDTO} from '../dto/rowDTO';
import { filter, pairwise } from 'rxjs/operators';

import { interval } from 'rxjs';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {  HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Event, NavigationStart, NavigationEnd, NavigationError, RoutesRecognized } from '@angular/router';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

    hallId: number;
    movieId: number;
    sessionDateTime: string;
    posterLink: string;
    id: number;
    title: string;
    length: number;
    ticketDTO: TicketDTO;
    seatNumber: number;
    previousUrl: string;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private ticketService: TicketService,
        private router: Router) {}

    ngOnInit() {

        this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));

        this.sessionDateTime = '2022-12-17T03:24:00';

        this.router.events
            .subscribe((event) => {
              if (event instanceof NavigationStart) {
                window.localStorage.setItem('previousUrl', this.router.url);
              }
            });

        this.movieService.getOne(this.movieId).subscribe(
            data => {
                this.posterLink = data.posterLink;
                this.id = data.id;
                this.title = data.title;
                this.length = data.length;
            });

    }

     onSubmit() {
        
        this.ticketDTO = new TicketDTO();

        let movie = new MovieDTO();
        movie.id = this.movieId;

        let hall = new HallDTO();
        let myArray = window.localStorage.getItem('previousUrl').split("/");
        this.hallId = Number(myArray.pop());
        hall.id = this.hallId;

        let seat = new SeatDTO();
        seat.number = 1;
        let row = new RowDTO();
        row.id = 1;
        seat.row = row;

        this.ticketDTO.sessionDateTime = this.sessionDateTime;
        this.ticketDTO.movie = movie;
        this.ticketDTO.hall = hall;

        this.ticketService.createTicket(this.sessionDateTime, movie, hall, seat)
            .subscribe(
                (data: any) => {
                    console.log(data.body);
                });
    }  
}