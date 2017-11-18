"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AAutocompleteDirective = (function () {
    function AAutocompleteDirective(input) {
        this.input = input;
        this._options = {
            source: []
        };
    }
    AAutocompleteDirective.prototype.ngOnInit = function () { };
    AAutocompleteDirective.prototype.ngOnChanges = function (changes) {
        if (changes['options']) {
            this.init();
        }
    };
    AAutocompleteDirective.prototype.ngOnDestroy = function () {
        this.destroyAutocomplete();
    };
    AAutocompleteDirective.prototype.init = function () {
        this.destroyAutocomplete();
        this._options = Object.assign(this._options, this.options);
        $(this.input.nativeElement).autocomplete(this._options);
    };
    AAutocompleteDirective.prototype.destroyAutocomplete = function () {
        if (this.input.nativeElement.className.includes('ui-autocomplete-input')) {
            $(this.input).autocomplete('destroy');
        }
    };
    return AAutocompleteDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AAutocompleteDirective.prototype, "options", void 0);
AAutocompleteDirective = __decorate([
    core_1.Directive({
        selector: '[a-autocomplete]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AAutocompleteDirective);
exports.AAutocompleteDirective = AAutocompleteDirective;
//# sourceMappingURL=a-autocomplete.directive.js.map