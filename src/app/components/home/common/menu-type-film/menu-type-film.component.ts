import { Component, OnInit } from '@angular/core';
import { Movie, TypeMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-menu-type-film',
  templateUrl: './menu-type-film.component.html',
  styleUrls: ['./menu-type-film.component.scss'],
})
export class MenuTypeFilmComponent implements OnInit {
  movies: Movie[] = [];
  types: TypeMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllTypeMovies();
  }

  getAllTypeMovies() {
    this.movieService.getAllTypeMovies().subscribe((e) => (this.types = e));
  }
}
