import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.todoo;
  }
  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }
  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
