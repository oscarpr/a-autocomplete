import { AAutocompleteDirective } from './component/a-autocomplete.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      AAutocompleteDirective
    ],
    exports: [
      AAutocompleteDirective
    ]
})
export class AAutocompleteModule { }