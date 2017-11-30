import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.Component'
import {AboutComponent} from './about/about.Component'
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing,HttpModule ], //other modules the app depends on
  declarations: [AppComponent,HomeComponent,AboutComponent], // declare all derectives and components
  bootstrap : [AppComponent] // root component to bootstarp
})
export class AppModule { }