import { TaskList } from './../../model/TaskList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm("Deseja realmente apagar tudo?")
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({
      task: event,
      checked: false,
    });
  }

}
