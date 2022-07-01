import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-type-film',
  templateUrl: './type-film.component.html',
  styleUrls: ['./type-film.component.scss'],
})
export class TypeFilmComponent implements OnInit {
  @Input() value: string = 'type name';
  @Input() typeSelected: boolean = false;
  @Output() onClickSelected = new EventEmitter<any>();
  @Output() getMoviesByType = new EventEmitter<any>();
  a: any = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  clickSelected(type: string) {
    this.onClickSelected.emit();
    this.getMoviesByType.emit(type);
  }
}
