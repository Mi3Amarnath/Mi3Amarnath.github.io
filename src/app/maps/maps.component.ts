import { Component} from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-maps',
  styles: [`
  agm-map {
    height: 300px;
  }
`],
templateUrl :'./maps.component.html'
/*template: `
  <div class="container">
    <h1>Angular 2 + Google Maps Places Autocomplete</h1>
    <div class="form-group">
      <input placeholder="search for location" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search [formControl]="searchControl">
    </div>
    <agm-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom">
      <agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>
    </agm-map>
  </div>
` */
})
export class MapsComponent implements OnInit {
  
    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
  
   /* @ViewChild("search")
    public searchElementRef: ElementRef;
  
    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone
    ) {}
  */
    ngOnInit() {
      //set google maps defaults
/*      this.zoom = 13;
      this.latitude = 15.3243582;
      this.longitude = 74.75720560000002;
  
      //create search FormControl
      this.searchControl = new FormControl();
  
      //set current position
      this.setCurrentPosition();
  
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });*/
    }
  
 /*   private setCurrentPosition() {
      console.log("inside location");
      if ("geolocation" in navigator) {
        console.log("inside location 2");
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("inside location 2");
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    } */
  }