import { Component,Input,Output,EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';
import  { UserObj} from './usertype';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})



export class User {


@Input() user!: UserObj;
@Output() userSelected = new EventEmitter<string>();
@Input({ required: true }) isSelected!: boolean;

  onUserClick() {
this.userSelected.emit(this.user.id);
  }

selectedUser = USERS[0];


get userImgPath() {
return 'assets/users/' + this.selectedUser.avatar;
}

}
