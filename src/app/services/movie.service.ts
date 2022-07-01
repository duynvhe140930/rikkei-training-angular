import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, TypeMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  typeOfMovie: TypeMovie[] = [
    { id: 0, type: 'all' },
    { id: 1, type: 'action' },
    { id: 2, type: 'humor' },
    { id: 3, type: 'war' },
    { id: 4, type: 'family' },
    { id: 5, type: 'cartoon' },
    { id: 6, type: 'history' },
    { id: 7, type: 'adventure' },
    { id: 8, type: 'horrified' },
    { id: 9, type: 'romantic' },
    { id: 10, type: 'Fiction' },
  ];
  dataRootMovies: Movie[] = [
    {
      id: 1,
      name: 'Star War',
      premiereData: '22/06/2016',
      type: [
        { id: 1, type: 'action' },
        { id: 2, type: 'war' },
        { id: 3, type: 'adventure' },
      ],
    },
    {
      id: 2,
      name: 'Star War',
      premiereData: '22/06/2016',
      type: [{ id: 1, type: 'action' }],
    },
    {
      id: 3,
      name: 'Star War',
      premiereData: '22/06/2016',
      type: [{ id: 1, type: 'action' }],
    },
    {
      id: 4,
      name: 'Star War',
      premiereData: '22/06/2016',
      type: [{ id: 1, type: 'action' }],
    },
    {
      id: 5,
      name: 'Star War',
      premiereData: '22/06/2016',
      type: [{ id: 1, type: 'action' }],
    },
  ];

  movies: Movie[] = JSON.parse(JSON.stringify(this.dataRootMovies));

  getAllTypeMovies(): Observable<TypeMovie[]> {
    return of(this.typeOfMovie);
  }

  getAllMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  getMoviesByType(type: string): Observable<Movie[]> {
    this.movies = [];
    if (type === 'all') {
      this.movies = this.dataRootMovies;
    } else {
      this.dataRootMovies.filter((movie) => {
        movie.type.filter((data) => {
          if (data.type === type) {
            this.movies.push(movie);
          }
        });
      });
    }
    console.log('service get by type', this.movies);
    return of(this.movies);
  }
}
