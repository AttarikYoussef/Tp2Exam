import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/ITodo';
import { TodosServiceService } from '../Services/todos-service.service';

@Component({
  selector: 'app-my-todos',
  templateUrl: './my-todos.component.html',
  styleUrls: ['./my-todos.component.scss']
})
export class MyTodosComponent implements OnInit {

  todos : ITodo[];
  
  constructor(private mytodo: TodosServiceService) { }

  ngOnInit(): void {
    this.mytodo.getTickets().then((todoe: ITodo[]) => {
      console.log(todoe);
      this.todos = todoe;
    });
  }

}
