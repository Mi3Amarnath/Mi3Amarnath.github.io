import { Component, OnInit } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
@Component({
  selector:'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private LOGO = require("../assets/Penguins.jpg");
  constructor() { }

  ngOnInit() {
  }

}
