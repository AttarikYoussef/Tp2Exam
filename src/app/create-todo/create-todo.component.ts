import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITodo } from '../models/ITodo';
import { TodosServiceService } from '../Services/todos-service.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  todoCrud : FormGroup
  nom : AbstractControl
  description : AbstractControl
  status : AbstractControl

  constructor(private formBuilder :FormBuilder , private todos:TodosServiceService) {
    this.todoCrud = this.formBuilder.group({
      nom:["",[Validators.required]],
      description:["",[Validators.required]],
      status:["",[Validators.required]]
    });
    this.nom = this.todoCrud.controls.nom;
    this.description = this.todoCrud.controls.description;
    this.status = this.todoCrud.controls.status
   }

  ngOnInit(): void {

  }

  onCreate(){
    const ticket: ITodo = {
      ...this.todoCrud.value,
    };
    this.todos
      .createTicket(ticket)
      .then(() => {
        console.log('Todo Ajoute');
      })
      .catch((error) => console.log(error));
  }
}
