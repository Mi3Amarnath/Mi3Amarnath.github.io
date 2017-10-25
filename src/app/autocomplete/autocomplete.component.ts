import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

export class Users {
  constructor(public name: string) { }
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-autocomplete',
  templateUrl: 'autocomplete.component.html',
  styleUrls: ['autocomplete.component.css']
})
export class AutocompleteComponent {

  myControl = new FormControl();

  options = [
    new Users('Mary'),
    new Users('Shelley'),
    new Users('Igor')
  ];

  filteredOptions: Observable<Users[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
        .startWith(null)
        .map(user => user && typeof user === 'object' ? user.name : user)
        .map(name => name ? this.filter(name) : this.options.slice());
  }

  filter(name: string): Users[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user: Users): string {
    return (user ? user.name : user) as string;
  }

}