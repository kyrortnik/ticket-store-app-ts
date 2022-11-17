import { Component, OnInit } from '@angular/core';
import { HallService } from '../service/hall.service';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'hall-detail',
  templateUrl: './hall-detail.component.html'
  // styleUrls: ['./cinema-list.component.css']
})
export class HallDetailComponent implements OnInit {
 
  imageUrl: string;
  id: number;
  name: string;
  movies: MovieDetailComponent[];
  has3DSupport: boolean;
  hasIMAXSupport: boolean;
  // dtOpened : string = '';

  constructor(private hallService: HallService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let hallId = Number(this.route.snapshot.paramMap.get('hallId'));

    this.hallService.getOne(hallId).subscribe(
        data => {
            this.id = data.id;
            this.name = data.name;
            this.imageUrl = data.imageUrl;
            this.movies = data.moviesInRotation;
            this.has3DSupport = data.has3DSupport;
            this.hasIMAXSupport = data.hasIMAXSupport;
        }/*,
        err => {
            // this.content = JSON.parse(err.error).message;
        }*/
    );

    //  this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    // });
    // this.cinemaService.getOne(id).subscribe(
     this.hallService.getOne(hallId).subscribe(
      data => {
        // this.content = data;
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
        // this.dtOpened = data.dtOpened;
      },
      err => {
        // this.content = JSON.parse(err.error).message;
      }
    );
  }

  // onSubmit() : void {}
}
