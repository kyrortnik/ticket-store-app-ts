import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service';
import {CinemaDetailComponent } from '../cinema-detail/cinema-detail.component';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'cinema-list',
  templateUrl: './cinema-list.component.html'
  // styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  cinemaDetailsList: Observable<CinemaDetailComponent[]>;

  cinemaDetails: CinemaDetailComponent[];

  selectedId: number;

  constructor(private cinemaService: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.cinemaDetailsList = this.route.paramMap.pipe(
        switchMap(params => {
            this.selectedId = Number(params.get('cinemaId'));
            return this.cinemaService.getAll();
        })
    );
    this.cinemaService.getAll().subscribe(
      data => {
        // this.content = data;
        this.cinemaDetails = data;
        // this.cinemas = data;
      },
      err => {
        // this.content = JSON.parse(err.error).message;
      }
    );
  }

  // onSubmit() : void {}
}