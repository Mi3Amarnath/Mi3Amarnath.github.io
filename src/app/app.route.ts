import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { UserFormComponent  } from './Users/userForm.component';

export const router:Routes = [
{ path : 'user' , component: UserFormComponent },
{ path : 'about' , component:AboutComponent},
{ path : 'product' ,  component:ProductsComponent}
]

export const routes:ModuleWithProviders =RouterModule.forRoot(router);