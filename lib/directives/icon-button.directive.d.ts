import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconButtonDirective implements OnInit {
    private elementRef;
    private readonly classList;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IconButtonDirective, "[nova-icon-button]", never, {}, {}, never, never, false, never>;
}
