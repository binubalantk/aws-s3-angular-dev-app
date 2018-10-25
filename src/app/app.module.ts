import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AuthModule, AuthRootComponent, AuthRoutes } from './auth/auth.module';
import { DHomeComponent } from './d-home/d-home.component';

const appRoutes: Routes = [
  {path:'', component:AuthRootComponent, children:AuthRoutes},
  {path:'home', component:DHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    AuthModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true, useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }