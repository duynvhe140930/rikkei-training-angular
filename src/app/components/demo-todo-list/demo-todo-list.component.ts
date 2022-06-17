import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-demo-todo-list',
  templateUrl: './demo-todo-list.component.html',
  styleUrls: ['./demo-todo-list.component.scss'],
})
export class DemoTodoListComponent implements OnInit {
  hasTodo: boolean = false;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo = this.todoService.length > 0 ? true : false;
  }
}
