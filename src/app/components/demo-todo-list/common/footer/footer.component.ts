import { Component, Input, OnInit } from '@angular/core';
import { FillterButton, Filter } from 'src/app/models/filtering.model';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  filter: FillterButton[] = [
    { type: Filter.All, label: 'All', isActive: true },
    { type: Filter.Complete, label: 'Complete', isActive: true },
    { type: Filter.Active, label: 'Active', isActive: true },
  ];

  length = 0;
  constructor(private todoService: TodoService) {}

  temp: Todo[] = [];

  ngOnInit(): void {
    this.temp = this.todoService.todos;
    this.length = this.todoService.length;
  }
  test(label: string) {
    console.log('ok', label);
  }
}
