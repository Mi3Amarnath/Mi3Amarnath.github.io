import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule ,MdTabsModule,MdAutocompleteModule ,MdDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { routes} from './app.route';
import { DataServiceService } from './data-service.service';
import { UserProfileComponent }  from './Users/userprofile.component';
import {UserComponent }  from './Users/user.component';
import { UserFormComponent  } from './Users/userForm.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { SidenavComponent } from './sidenav/sidenav.component';
import { DialogDataExample ,DialogDataExampleDialog} from './dialog/dialog.component';
import { NestedMenuExampleComponent } from './nested-menu-example/nested-menu-example.component';
import { HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
 import 'hammerjs';
 //maaps
 import { AgmCoreModule,MapsAPILoader } from '@agm/core';

 import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    UserProfileComponent,UserComponent,UserFormComponent,
    AutocompleteComponent,SidenavComponent,DialogDataExample,DialogDataExampleDialog,
    NestedMenuExampleComponent,HomeComponent,AboutusComponent,MapsComponent
  ],
  imports: [
    BrowserModule,
   AgmCoreModule.forRoot({
      apiKey: "AIzaSyAOc3GaA9MLJwxYTYqqeiBeWb1_AhbODBc",
      libraries: ["places"]
    }),
    FormsModule,
    HttpModule,
    routes,
    MaterialModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdTabsModule,
     ReactiveFormsModule,
     MdDialogModule
    
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
