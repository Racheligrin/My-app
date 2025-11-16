import { Component,Input,Output,EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

 type UserObj = {
  id: string;
  name: string;
  avatar: string;
};

export class User {

// @Input() name!: string;
// @Input() avatar!: string;
// @Input() id!: string;

   @Input() user!: UserObj;

@Output() userSelected = new EventEmitter<string>();

  onUserClick() {
this.userSelected.emit(this.id);
  }

selectedUser = USERS[0];


get userImgPath() {
return 'assets/users/' + this.selectedUser.avatar;
}

}
