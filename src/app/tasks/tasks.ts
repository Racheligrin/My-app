import { Component,Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { TaskObj } from './task/tasktype';
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() userName: string = '';  
    @Input() userId?: string;

  tasks = fakeTasks;

get userSelectedTasks() {
return this.tasks.filter((task) => task.userId === this.userId)
}
}
