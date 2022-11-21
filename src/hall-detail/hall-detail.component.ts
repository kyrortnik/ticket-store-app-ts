import { Component, OnInit } from '@angular/core';
import { HallService } from '../service/hall.service';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'hall-detail',
  templateUrl: './hall-detail.component.html'
})
export class HallDetailComponent implements OnInit {
 
  imageUrl: string;
  id: number;
  name: string;
  movies: MovieDetailComponent[];
  has3DSupport: boolean;
  hasIMAXSupport: boolean;
  previousUrl: string;

  constructor(private hallService: HallService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let hallId = Number(this.route.snapshot.paramMap.get('hallId'));

      this.router.events
            .subscribe((event) => {
              if (event instanceof NavigationStart) {
                window.localStorage.setItem('previousUrl', this.router.url);
              }
            });

    this.hallService.getOne(hallId).subscribe(
        data => {
            this.id = data.id;
            this.name = data.name;
            this.imageUrl = data.imageUrl;
            this.movies = data.moviesInRotation;
            this.has3DSupport = data.has3DSupport;
            this.hasIMAXSupport = data.hasIMAXSupport;
        }
    );

     this.hallService.getOne(hallId).subscribe(
      data => {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
      }
    );
  }
}
