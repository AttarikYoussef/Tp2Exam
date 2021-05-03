import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTodoRoutingModule } from './create-todo-routing.module';
import { CreateTodoComponent } from './create-todo.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    CreateTodoRoutingModule,
    ReactiveFormsModule,
    FormGroup
  ]
})
export class CreateTodoModule { }
