import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const MOVIE_API_URL = 'http://localhost:8080/api/v1/movies/';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<any> {
    return this.http.get(MOVIE_API_URL + id, {responseType: 'json'});
  }

  getAll(): Observable<any> {
    return this.http.get(MOVIE_API_URL, { responseType: 'json' });
  }
}