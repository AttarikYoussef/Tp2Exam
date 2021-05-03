import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodosRoutingModule } from './my-todos-routing.module';
import { MyTodosComponent } from './my-todos.component';


@NgModule({
  declarations: [
    MyTodosComponent
  ],
  imports: [
    CommonModule,
    MyTodosRoutingModule
  ]
})
export class MyTodosModule { }
