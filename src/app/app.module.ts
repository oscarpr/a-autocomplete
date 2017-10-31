import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AAutocompleteModule } from '../lib/a-autocomplete.module';

@NgModule({
  imports: [
    BrowserModule,
    AAutocompleteModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
