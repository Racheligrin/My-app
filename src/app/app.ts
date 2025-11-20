import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';
import  { UserObj} from './user/usertype';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User,Tasks,Task,NewTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  users = USERS;
  selectedUser ? : UserObj; // המשתמש שנבחר

 onUserSelected(id: string) {

  const user = USERS.find(u => u.id === id);
  console.log('המשתמש שנבחר:', user || `לא נמצא משתמש עם id: ${id}`);

      this.selectedUser = user; 

}



}
