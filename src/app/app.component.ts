import { Component , trigger,
  state,
  style,
  transition,
  animate,
  keyframes} from '@angular/core';
import { DataServiceService } from './data-service.service';
import { SidenavComponent } from './sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataServiceService],
  animations: [
    
            trigger('focusPanel', [
                state('inactive', style({
                    transform: 'scale(1)',
                    backgroundColor: '#eee'
                })),
                state('active', style({
                    transform: 'scale(1.1)',
                    backgroundColor: '#cfd8dc'
                })),
                transition('inactive => active', animate('100ms ease-in')),
                transition('active => inactive', animate('100ms ease-out'))
            ]),
    
        ]
})
export class AppComponent {
  title = 'Project Title';
  private aavishkar= require("./assets/aavishkar.png");
  constructor(private _dataService:DataServiceService ){

  }
   openNav() { 
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  changeTitle(){
    this.title = this._dataService.getTitle();
  }

  opentab(tab:any):void{
      
  }
  ngOnInit() {
  //  this.title = this._dataService.getTitle();
}
aboutstate: string = 'inactive';
productstate: string = 'inactive';

    toggleMove(compState:any) {
      if(compState === 'about'){
        this.aboutstate = (this.aboutstate === 'inactive' ? 'active' : 'inactive');
      }
      else if(compState === 'product'){
        this.productstate = (this.productstate === 'inactive' ? 'active' : 'inactive');
      }
        

    }

}
