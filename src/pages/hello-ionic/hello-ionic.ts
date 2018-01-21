import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  title: string = 'タスク登録'
  tasks: {name: string}[] = [
    {name: 'タスク1'},
    {name: 'タスク2'},
  ];
  constructor() {

  }
}
