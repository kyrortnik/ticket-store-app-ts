import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html'
  // styleUrls: ['./cinema-list.component.css']
})
export class MovieDetailComponent implements OnInit {
 
  posterLink: string;
  id: number;
  title: string;
  length: number;
  // movies: MovieDetailComponent[];
  // has3DSupport: boolean;
  // hasIMAXSupport: boolean;
  // dtOpened : string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let movieId = Number(this.route.snapshot.paramMap.get('movieId'));

    this.movieService.getOne(movieId).subscribe(
        data => {
            this.posterLink = data.posterLink;
            this.id = data.id;
            this.title = data.title;
            // this.movies = data.moviesInRotation;
            this.length = data.length;
            // this.hasIMAXSupport = data.hasIMAXSupport;
        }/*,
        err => {
            // this.content = JSON.parse(err.error).message;
        }*/
    );

    //  this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    // });
    // this.cinemaService.getOne(id).subscribe(
  }

  // onSubmit() : void {}
}
