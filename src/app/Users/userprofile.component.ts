import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-profile',
  template: `
    <div class="jumbotron" *ngIf="user">
      <h2>{{ user.name }} <small>{{ user.username }}</small></h2>
      <input class="form-control" [(ngModel)]="user.name">
      <input class="form-control" [(ngModel)]="user.username">
    </div>
  `
})
export class UserProfileComponent {
  @Input() user: User;
}