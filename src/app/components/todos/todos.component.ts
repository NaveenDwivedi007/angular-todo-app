import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import {todos} from '../../model/todo';

import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt=faTrashAlt;
  todos:todos[];
  constructor(private TodosService:TodosService) { }

  ngOnInit(): void {
    this.TodosService.getTodos().subscribe((todos)=>{
      this.todos=todos;
    })
  }

  changeTodoStatus(todo:todos){
    this.TodosService.changeStatus(todo);
  }

  deleteTodo(todo:todos){
    this.TodosService.deleteTodo(todo);
  }
  

}
