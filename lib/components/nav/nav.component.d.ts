import { EventEmitter } from '@angular/core';
import { Item, Nav } from './nav';
import * as i0 from "@angular/core";
export declare class NavComponent {
    showModal: boolean;
    props: Nav;
    collapsed: boolean;
    onCollapsed: EventEmitter<boolean>;
    constructor();
    collapseItem(item: Item): void;
    collapseNav(): void;
    readonly onCloseModal: (closed: boolean) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavComponent, "nova-nav", never, { "props": { "alias": "props"; "required": false; }; }, { "onCollapsed": "onCollapsed"; }, never, ["*", "[modal]"], false, never>;
}
