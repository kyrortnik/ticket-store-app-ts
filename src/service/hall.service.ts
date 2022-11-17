import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const HALL_API_URL = 'http://localhost:8080/api/v1/halls/';

@Injectable({
  providedIn: 'root'
})
export class HallService {
  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<any> {
    return this.http.get(HALL_API_URL + id, {responseType: 'json'});
  }

  getAll(): Observable<any> {
    return this.http.get(HALL_API_URL, { responseType: 'json' });
  }

  getHallsForCinema(cinemaId: number ): Observable<any> {
    return this.http.get(HALL_API_URL + 'byCinemaId/' + cinemaId, {responseType: 'json'});
  }
}