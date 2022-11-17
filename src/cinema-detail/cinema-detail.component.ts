import { Component,OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service';
import { HallService } from '../service/hall.service';
import { HallDetailComponent } from '../hall-detail/hall-detail.component';

import { switchMap } from 'rxjs/operators';
// import { switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'cinema-detail',
    templateUrl: './cinema-detail.component.html'
    // styleUrls: ['./cinema-list.component.css']
})
export class CinemaDetailComponent implements OnInit {

    imageUrl: string = '';
    id: number;
    name: string = '';
    dtOpened: string = '';
    startWorkTime: number = 0;
    closeWorkTime: number = 0;

    // cinemaHalls: Observable<HallDetailComponent[]>;

    cinemaHalls: HallDetailComponent[];

    cinemaDetail: Observable<CinemaDetailComponent>;

    constructor(
      private cinemaService: CinemaService,
      private hallService: HallService,
      private route: ActivatedRoute,
      private router: Router) {}

   ngOnInit() {

     let cinemaId = Number(this.route.snapshot.paramMap.get('cinemaId'));
     // this.id = cinemaId;
    
    // this.cinemaDetail = this.cinemaService.getOne(cinemaId);
    // console.log(cinemaId1);
    // this.cinemaHalls = this.route.paramMap.pipe(
    //     switchMap(params => {
    //         this.id = Number(params.get('id'));
    //         return this.hallService.getAll();
    //     })
    // );
    //    this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    //   console.log(params);
    // });
    // this.cinemaService.getOne(id).subscribe(
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

gotoItems(cinemaDetail: CinemaDetailComponent) {
  const cinemaId = cinemaDetail ? cinemaDetail.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that item.
  this.router.navigate(['/cinema', { id: cinemaId }]);
}

    // onSubmit() : void {}
}