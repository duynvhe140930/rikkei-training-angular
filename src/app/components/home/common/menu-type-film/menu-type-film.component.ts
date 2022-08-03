import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie, TypeMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-menu-type-film',
  templateUrl: './menu-type-film.component.html',
  styleUrls: ['./menu-type-film.component.scss'],
})
export class MenuTypeFilmComponent implements OnInit {
  @Output() selectedType = new EventEmitter<string>();

  movies: Movie[] = [];
  types: TypeMovie[] = [];
  typeSelected: TypeMovie = {
    id: 0,
    type: 'all',
  };
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllTypeMovies();
  }

  getAllTypeMovies() {
    this.movieService.getAllTypeMovies().subscribe((e) => (this.types = e));
  }

  selectedItem(type: TypeMovie) {
    this, this.selectedType.emit(type.type);
    this.typeSelected = type;
    // this.movieService.getMoviesByType(type.type).subscribe();
  }
}
