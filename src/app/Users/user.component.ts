import { Component, OnInit } from '@angular/core';
import { User } from '../Users/user';

@Component({
    selector:'users',
    templateUrl:'./user.component.html'
})
export class UserComponent
{
    message: string = 'Hello!'; 
    users: User[] = [
      { id: 25, name: 'Chris', username: 'sevilayha' },
      { id: 26, name: 'Nick', username: 'whatnicktweets' },
      { id: 27, name: 'Holly', username: 'hollylawly' }
    ];
    activeUser: User;
  
    selectUser(user) {
      this.activeUser = user;
  //    console.log(this.activeUser);
    }
}