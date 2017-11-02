import { Component, OnInit, OnChanges, OnDestroy, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

@Component({
    selector: 'a-autocomplete',
    template: '<input #input>'
})
export class AAutocompleteComponent implements OnInit, OnDestroy, OnChanges {
    @Input()
    options: any;

    private _options: any = {
        source: []
    };

    @ViewChild('input') input: ElementRef;

    constructor() { }


    ngOnInit(): void { }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['options']) {
            this.init();
        }
    }


    ngOnDestroy(): void {
        this.destroyAutocomplete();
    }


    private init(): void {
        this.destroyAutocomplete();

        this._options = Object.assign(this._options, this.options);

        $(this.input.nativeElement).autocomplete(this._options);
    }


    private destroyAutocomplete(): void {
        if (this.input.nativeElement.className.includes('ui-autocomplete-input')) {
            $(this.input).autocomplete('destroy');
        }
    }
}
