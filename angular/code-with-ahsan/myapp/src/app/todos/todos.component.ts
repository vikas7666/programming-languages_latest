import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf,NgFor,UpperCasePipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
