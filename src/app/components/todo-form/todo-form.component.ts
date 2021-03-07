import { Component, OnInit } from '@angular/core';
import { todos } from '../../model/todo';
import {v4 as uuidv4} from 'uuid';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newTitle:string;
  constructor(private TodosService:TodosService) { }

  ngOnInit(): void {
  }
  handleAdd(){
    const newTodo:todos={
   id:uuidv4(),
   isCompleted:false,
   date: new Date,
   title:this.newTitle
 };
 this.TodosService.addTodos(newTodo);
 this.newTitle="";
 }



}
