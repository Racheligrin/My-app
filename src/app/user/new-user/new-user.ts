import { Component,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, AbstractControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  imports: [  ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {
    @Output() close = new EventEmitter<void>();

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    lastName: new FormControl('', [Validators.required,Validators.maxLength(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
 onCancel() {
  this.close.emit();
  }
onSubmit() {
  if (this.form.valid) {
    console.log("Form data:", this.form.value);
    
  } else {
    this.form.markAllAsTouched();
  }
}
get firstName(): FormControl {
return this.form.controls.firstName;
}
get lastName(): FormControl {
return this.form.controls.lastName;
}
get email(): FormControl {
return this.form.controls.email;
}
get password(): FormControl {
return this.form.controls.password;
}
get confirmPassword(): FormControl {
return this.form.controls.confirmPassword;
}
}
export default NewUser;