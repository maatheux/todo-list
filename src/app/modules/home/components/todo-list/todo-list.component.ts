import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList?: Array<TaskList> = [
    {task: 'First task', checked: true},
    {task: 'Second task', checked: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
