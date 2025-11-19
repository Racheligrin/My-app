import { Component,Input } from '@angular/core';
import{TaskObj} from './tasktype';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
@Input({required: true}) task!: TaskObj

}
