import { Component,OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service';
import { HallService } from '../service/hall.service';
import { HallDetailComponent } from '../hall-detail/hall-detail.component';

import { switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'cinema-detail',
    templateUrl: './cinema-detail.component.html'
})
export class CinemaDetailComponent implements OnInit {

    imageUrl: string;
    id: number;
    name: string;
    dtOpened: string;
    startWorkTime: number;
    closeWorkTime: number;

    cinemaHalls: HallDetailComponent[];

    cinemaDetail: Observable<CinemaDetailComponent>;

    constructor(
      private cinemaService: CinemaService,
      private hallService: HallService,
      private route: ActivatedRoute,
      private router: Router) {}

   ngOnInit() {

     let cinemaId = Number(this.route.snapshot.paramMap.get('cinemaId'));
    this.cinemaService.getOne(cinemaId).subscribe(
        data => {
            this.id = data.id;
            this.name = data.name;
            this.imageUrl = data.imageUrl;
            this.dtOpened = data.dtOpened;
            this.startWorkTime = data.startWorkTime;
            this.closeWorkTime = data.closeWorkTime;
        }/*,
        err => {
            // this.content = JSON.parse(err.error).message;
        }*/
    );
    this.hallService.getHallsForCinema(cinemaId).subscribe(
        data => {
            this.cinemaHalls = data;
        }
    );
}
}