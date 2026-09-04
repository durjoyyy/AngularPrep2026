import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  imports: [],
  templateUrl: './to-do-app.html',
  styleUrl: './to-do-app.scss',
})
export class ToDoApp {
  newTodo = signal<string>('');
  todos = signal<{ text: string; done: boolean }[]>([]);

  addTodo() {
    const text = this.newTodo().trim();
    if (text == '') return;
    this.todos.update((list) => [...list, { text, done: false }]);
    this.newTodo.set('');
  }

  toggleTodo(index: number) {
    this.todos.update((list) =>
      list.map((item, i) => (i == index ? { ...item, done: !item.done } : item)),
    );
  }

  deleteTodo(index: number) {
    this.todos.update((list) => list.filter((_, i) => i !== index));
  }
}
