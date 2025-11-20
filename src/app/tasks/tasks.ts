import { Component,Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { TaskObj } from './task/tasktype';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() userName: string = '';  
    @Input() userId?: string;
showNewTaskForm: boolean = false;

  tasks = fakeTasks;

get userSelectedTasks() {
return this.tasks.filter((task) => task.userId === this.userId)
}


}
