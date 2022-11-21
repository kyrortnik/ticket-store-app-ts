import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import {TicketDetailComponent } from '../ticket-detail/ticket-detail.component'
import {HallDTO} from '../dto/hallDTO';
import {MovieDTO} from '../dto/movieDTO';
import {SeatDTO} from '../dto/seatDTO';


const TICKET_API_URL = 'http://localhost:8080/api/v1/tickets/';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
    }),
    observe: 'response' as 'response'/*,
    responseType: 'json'*/
};


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  createTicket(sessionDateTime: string, movie: MovieDTO, hall: HallDTO, seat: SeatDTO): any {
    return this.http.post<any>(TICKET_API_URL, {
     sessionDateTime, movie, hall, seat
    }, httpOptions);
  }

}