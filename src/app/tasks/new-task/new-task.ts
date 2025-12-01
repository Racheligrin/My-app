import { Component ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})

export class NewTask {
  title: string = '';
  summary: string = '';
  dueDate: string = '';
  @Output() close = new EventEmitter<void>();

  onSubmit(taskForm: NgForm) {
    console.log('Form Value:', taskForm.value); 
    console.log('Form Valid:', taskForm.valid); 
  }

  onCancel() {
  this.close.emit();
  }

onBackdropClick() {
  this.close.emit();
}

}

export default NewTask;