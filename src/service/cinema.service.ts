import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const CINEMA_API_URL = 'http://localhost:8080/api/v1/cinemas/';

const HALL_API_URL = 'http://localhost:8080/api/v1/halls/byCinemaId/';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(CINEMA_API_URL, { responseType: 'json' });
  }

  getOne(id: number): Observable<any> {
    return this.http.get(CINEMA_API_URL + id, {responseType: 'json'});
  }

  // getHallsForCinema(cinemaId: number ): Observable<any> {
  //   return this.http.get(HALL_API_URL + cinemaId, {responseType: 'json'});
  // }
}