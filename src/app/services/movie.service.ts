import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Movie, TypeMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  URL: string = 'http://localhost:3000';
  URLMovies: string = `${this.URL}/movies`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllTypeMovies(): Observable<TypeMovie[]> {
    return this.http.get<TypeMovie[]>(`${this.URL}/typeOfMovie`).pipe(
      tap((data) => of(data)),
      catchError((e) => of(e))
    );
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.URLMovies}`).pipe(
      tap((data) => of(data)),
      catchError((e) => of(e))
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.URLMovies}/${id}`).pipe(
      tap((data) => data),
      catchError((e) => of(e))
    );
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http
      .put(`${this.URLMovies}/${movie.id}`, movie, this.httpOptions)
      .pipe(
        tap((data) => console.log('end', data)),
        catchError(() => of())
      );
  }

  addNewMovie(newMovie: Movie) {
    this.http.post<Movie>(this.URLMovies, newMovie, this.httpOptions).pipe(
      tap((data) => data),
      catchError((e) => of(e))
    );
  }
}
