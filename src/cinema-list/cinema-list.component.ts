import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service';

@Component({
  selector: 'cinema-list',
  templateUrl: './cinema-list.component.html'
  // styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  // content?: json;
  cinemas?: json;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getAll().subscribe(
      data => {
        // this.content = data;
        this.cinemas = data;
      },
      err => {
        // this.content = JSON.parse(err.error).message;
      }
    );
  }

  // onSubmit() : void {}
}