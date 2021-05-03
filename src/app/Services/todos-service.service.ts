import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { ITodo } from '../models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  todoRef = firebase.database().ref('todo');
  todos: ITodo[] = [];

  constructor() { }

  createTicket(todo: ITodo) {
    return this.todoRef.push({
      ...todo,
    });
  }

  getTickets(): Promise<ITodo[] | string> {
    return new Promise((resolve, reject) => {
      this.todoRef.on('value', (snapshot, error) => {
        Object.entries(snapshot.val()).forEach(
          (element: [string, ITodo]) => {
            // Add ticket id in ticket object
            element[1].nom = element[0];
            this.todos.push(element[1]);
          }
        );
        resolve(this.todos);
        reject(error);
      });
    });
  }
}
