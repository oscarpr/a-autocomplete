import { AAutocompleteDirective } from './component/a-autocomplete.directive';
import { AAutocompleteComponent } from './component/a-autocomplete.component';
import { NgModule } from '@angular/core';
import 'https://code.jquery.com/jquery-3.2.1.min.js';
import 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';

@NgModule({
  declarations: [AAutocompleteComponent, AAutocompleteDirective],
  exports: [AAutocompleteComponent]
})
export class AAutocompleteModule { }
