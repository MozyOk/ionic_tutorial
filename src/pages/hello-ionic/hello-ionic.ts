import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common/src/pipes';

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

  ionViewWillEnter(){
   if(localStorage.getItem('tasks')){
     this.tasks = JSON.parse(localStorage.getItem('tasks'));
   }
  }
  
  addTask() {
  this.tasks.push({
    name: this.task
  });
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
  this.task = '';
  }
}
