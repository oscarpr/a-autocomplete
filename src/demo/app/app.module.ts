import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AAutocompleteModule } from '../../../index';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AAutocompleteModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
