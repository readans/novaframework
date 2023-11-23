import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonDirective {
    private elementRef;
    private readonly classList;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "[nova-button]", never, {}, {}, never, never, false, never>;
}
