import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = { id: 0, content: '', isComplete: false };
  @Output() changestatus = new EventEmitter<Todo>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  isEditing = false;

  constructor() {}

  ngOnInit(): void {}
  changeTodoStatus() {
    this.changestatus.emit({ ...this.todo, isComplete: this.todo.isComplete });
  }
  submitEdit(event: KeyboardEvent) {
    event.preventDefault();
    // console.log(event.keyCode === 13);
    if (event.keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }
  removeTodo() {
    this.deleteTodo.emit(this.todo.id);
  }
}
