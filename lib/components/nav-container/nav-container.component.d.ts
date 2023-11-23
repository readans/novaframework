import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
export declare class NavContainerComponent {
    collapsed: boolean;
    nav: Nav;
    readonly onCollapsed: (collapsed: boolean) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavContainerComponent, "nova-nav-container", never, { "nav": { "alias": "nav"; "required": false; }; }, {}, never, ["[modal]", "[list]", "*"], false, never>;
}
