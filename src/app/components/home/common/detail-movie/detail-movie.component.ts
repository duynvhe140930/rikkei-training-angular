import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  @Input() movies: Movie[] = [];

  displayModal: boolean = false;
  inputName: string = '';
  movie: Movie = {
    id: -1,
    name: this.inputName,
    premiereData: '',
    type: '',
  };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.movie.name = this.inputName;
    this.movieService
      .updateMovie(this.movie)
      .subscribe(() => (this.displayModal = false));
  }

  showModalDialog(movie: Movie) {
    this.movie = movie;
    this.movieService
      .getMovieById(movie.id)
      .subscribe((data) => (this.inputName = data.name));
    this.displayModal = true;
  }
}
