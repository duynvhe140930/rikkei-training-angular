import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-film',
  templateUrl: './type-film.component.html',
  styleUrls: ['./type-film.component.scss'],
})
export class TypeFilmComponent implements OnInit {
  @Input() value: string = 'type name';
  constructor() {}

  ngOnInit(): void {}
}
