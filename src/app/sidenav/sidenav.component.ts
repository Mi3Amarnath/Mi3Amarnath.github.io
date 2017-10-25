import { Component, OnInit ,HostListener} from '@angular/core';
//import { DialogDataExample, DialogDataExampleDialog} from '../dialog/dialog.component'
//import { NestedMenuExampleComponent } from '../nested-menu-example/nested-menu-example.component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
   type:string='one';

  @HostListener('mouseenter') 
  onMouseEnter() {

  //  this.sidenav.open();
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
   
  }
  ngOnInit() {
  }
  public clickeMe(type:string):void{
    this.type=type;
  }
}