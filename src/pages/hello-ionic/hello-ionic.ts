import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  title: string = 'タスク登録'
  task: string;
  tasks: {name: string}[] = [
    {name: 'タスク1'},
    {name: 'タスク2'},
  ];
  constructor(){

  }

addTask() {
  this.tasks.push({
    name: this.task
  });
  this.task = '';
  }
}
