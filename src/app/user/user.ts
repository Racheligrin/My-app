import { Component,Input,Output,EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';
import  { UserObj} from '../usertype';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})



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
