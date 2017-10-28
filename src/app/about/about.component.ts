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
  private bestFromWaste = require("../assets/bestfromwaste.png");
  private tribologi = require("../assets/tribologi.png");
  private generalquiz = require("../assets/generalquiz.png");
  ngOnInit() {
  }

}
