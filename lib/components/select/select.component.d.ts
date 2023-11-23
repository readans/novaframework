import { KeyValue } from '@angular/common';
import { AfterContentInit, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SelectComponent implements AfterContentInit {
    private elementRef;
    _options: KeyValue<string, any>[];
    set options(options: KeyValue<string, any>[] | null);
    onSelected: EventEmitter<KeyValue<string, any>>;
    selected: KeyValue<string, any>;
    showOptions: boolean;
    constructor(elementRef: ElementRef);
    ngAfterContentInit(): void;
    onDocumentClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "nova-select", never, { "options": { "alias": "options"; "required": false; }; }, { "onSelected": "onSelected"; }, never, never, false, never>;
}
