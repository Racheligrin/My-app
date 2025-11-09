import { Component,Input,Output,EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {

@Input() name!: string;
@Input() avatar!: string;
@Input() id!: string;
@Output() userSelected = new EventEmitter<number>();

  onUserClick() {
this.userSelected.emit(Number(this.selectedUser.id));
  }

selectedUser = USERS[0];


get userImgPath() {
return 'assets/users/' + this.selectedUser.avatar;
}

}
