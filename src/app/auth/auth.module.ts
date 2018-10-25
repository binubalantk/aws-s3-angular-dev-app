import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from 'angular2-materialize';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { AuthComponent } from './auth.component';

const innerRoutes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterializeModule,
    FormsModule
  ],
  declarations: [LoginComponent, AuthComponent]
})
export class AuthModule { }
export const AuthRootComponent = AuthComponent;
export const AuthRoutes = innerRoutes;
