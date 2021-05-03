import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'create-todo', loadChildren: () => import('./create-todo/create-todo.module').then(m => m.CreateTodoModule) }, { path: 'my-todos', loadChildren: () => import('./my-todos/my-todos.module').then(m => m.MyTodosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
