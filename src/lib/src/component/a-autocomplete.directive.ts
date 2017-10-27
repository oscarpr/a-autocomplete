import { Directive, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var $: any;

@Directive({ selector: '[a-autocomplete]' })
export class AAutocompleteDirective implements OnInit, OnChanges {
	@Input()
	options: any;


	private _options: any = {
		source: []
	};

	constructor(private elRef: ElementRef) { }

	ngOnInit(): void {
		this.init();

	}


	ngOnChanges(changes: SimpleChanges): void {
		if (changes['options'] && !changes['options'].firstChange) {
			this.init()
		}
	}


	private init(): void {
		this._options = Object.assign(this._options, this.options);
		$(this.elRef.nativeElement).autocomplete(this._options)
	}
}