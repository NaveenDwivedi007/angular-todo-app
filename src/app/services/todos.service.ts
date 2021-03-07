import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { todos } from '../model/todo'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: todos[];
  constructor() {
    this.todos=[
     {
        id: "111",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date(),
     },
     {
      id: "222",
      title: "Learn Javascript",
      isCompleted: false,
      date: new Date(),
   },
   {
    id: "333",
    title: "Learn React",
    isCompleted: true,
    date: new Date(),
 },
     ];
   }

   getTodos(){
     return of(this.todos)
   }
   addTodos(todo:todos){
    this.todos.push(todo)
   }
   changeStatus(todo: todos) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
   }
 

   deleteTodo(todo:todos){
    const indexoftodos =this.todos.findIndex(
      (currentObj)=>currentObj.id === todo.id,
    );
    this.todos.splice(indexoftodos,1);
   }
  
}
