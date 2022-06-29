import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, TypeMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  typeOfMovie: TypeMovie[] = [
    { id: 1, type: 'action' },
    { id: 2, type: 'humor' },
    { id: 3, type: 'war' },
    { id: 4, type: 'family' },
    { id: 5, type: 'carton' },
    { id: 6, type: 'history' },
    { id: 7, type: 'adventure' },
    { id: 8, type: 'horrified' },
    { id: 9, type: 'romantic' },
    { id: 10, type: 'Fiction' },
  ];

  movies: Movie[] = [
    { id: 1, name: 'Star War', premiereData: '22/06/2016' },
    { id: 2, name: 'Star War', premiereData: '22/06/2016' },
    { id: 3, name: 'Star War', premiereData: '22/06/2016' },
    { id: 4, name: 'Star War', premiereData: '22/06/2016' },
  ];

  getAllTypeMovies(): Observable<TypeMovie[]> {
    return of(this.typeOfMovie);
  }
}
