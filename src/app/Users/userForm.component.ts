import { Component } from '@angular/core';
import { User } from './user';
import  {} from '../autocomplete/autocomplete.component'
 
@Component({
  
  styles: [`
    form   {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
    }
   
  `],
  template: `
    <form #userForm="ngForm" (ngSubmit)="formSubmit(userForm.value)">
      <div class="form-group">
        <input type="text" placeHolder='Name'  class="form-control" name="name" ngModel required>
      </div>
      <div class="form-group">
        <input type="text" placeHolder='UserName' class="form-control" name="username" ngModel required>
      </div>
      
      <button type="submit" class="btn btn-lg btn-block btn-primary">
        Create User
      </button>
    </form>
   
  `
})
export class UserFormComponent {
  formSubmit(userData):void
  {
      console.log(userData);
  }
 
}
