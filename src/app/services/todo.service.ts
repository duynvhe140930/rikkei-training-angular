import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../models/filtering.model';
import { Todo } from '../models/todo.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private static readonly TodoStorageKey = 'todos';

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  displayTodoSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  currentFilter: Filter = Filter.All;

  length: Observable<number> = this.lengthSubject.asObservable();
  todoo: Observable<Todo[]> = this.displayTodoSubject.asObservable();

  constructor(private storageService: LocalStorageService) {}

  fetchFromLocalStorage() {
    this.todos =
      this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || [];
    this.filteredTodos = JSON.parse(JSON.stringify(this.todos));
    this.updateTodoData();
  }

  updateToLocalStorage() {
    this.storageService.setObject(TodoService.TodoStorageKey, this.todos);
    this.filterTodos(this.currentFilter, false);
    this.updateTodoData();
  }

  clearTodo() {
    const newTodo: Todo[] = [];
    this.todos = newTodo;
    this.updateToLocalStorage();
    this.storageService.clear();
  }

  addTodo(content: string) {
    const date = new Date(Date.now()).getTime();
    const newTodo: Todo = {
      id: date,
      content: content,
      isComplete: false,
    };
    this.todos.unshift(newTodo);
    this.updateToLocalStorage();
  }
  updateTodo(todo: Todo) {
    const index = this.todos.findIndex((item) => todo.id === item.id);
    this.todos.splice(index, 1, todo);
    this.updateToLocalStorage();
  }
  removeTodo(id: number) {
    const index = this.todos.findIndex((item) => id === item.id);
    this.todos.splice(index, 1);
    this.updateToLocalStorage();
  }

  filterTodos(filter: Filter, isFiltering: boolean = true) {
    this.currentFilter = filter;
    switch (filter) {
      case Filter.Active:
        this.filteredTodos = this.todos.filter((item) => !item.isComplete);
        console.log(this.filteredTodos);
        break;
      case Filter.Complete:
        this.filteredTodos = this.todos.filter((item) => item.isComplete);
        break;
      case Filter.All:
        this.filteredTodos = JSON.parse(JSON.stringify(this.todos));
    }
    if (isFiltering) {
      this.updateTodoData();
    }
  }

  private updateTodoData() {
    this.displayTodoSubject.next(this.filteredTodos);
    this.lengthSubject.next(this.todos.length);
  }
}
