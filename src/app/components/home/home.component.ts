import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map, tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked
{
  movies: Movie[] = [];
  tempMovies: Movie[] = [];
  displayModal: boolean = false;
  newMovie: Movie = {
    id: -1,
    name: '',
    premiereData: '',
    type: [],
  };

  constructor(private movieService: MovieService) {}

  ngOnChanges(change: SimpleChanges) {}

  ngOnInit(): void {
    this.movieService
      .getAllMovies()
      .subscribe((e) => ((this.movies = e), (this.tempMovies = e)));
  }

  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {}
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {}

  showModalDialog() {
    this.displayModal = true;
  }

  onSubmitAddNewMovie() {}

  filterMovies(type: string) {
    let tempFilter: Movie[] = [];

    if (type === 'all') {
      tempFilter = this.tempMovies;
    } else {
      let temp = this.tempMovies;
      temp.filter((movie) => {
        movie.type.filter((dataType) => {
          if (dataType.type === type) {
            tempFilter.push(movie);
          }
        });
      });
    }
    this.movies = tempFilter;
  }
}
