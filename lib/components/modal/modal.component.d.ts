import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModalComponent {
    private modalElementRef;
    closed: EventEmitter<boolean>;
    constructor(modalElementRef: ElementRef);
    onClick(elem: Element): void;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "nova-modal", never, {}, { "closed": "closed"; }, never, ["*"], false, never>;
}
