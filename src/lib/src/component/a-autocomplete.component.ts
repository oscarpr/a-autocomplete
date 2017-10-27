import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-autocomplete',
  templateUrl: './a-autocomplete.component.html',
  styleUrls: ['./a-autocomplete.component.css']
})
export class AAutocompleteComponent {

  @Input()
  options: any;

  constructor() { }

}
