import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "../nav/nav.component";
export class NavContainerComponent {
    constructor() {
        this.collapsed = false;
        this.onCollapsed = (collapsed) => { this.collapsed = collapsed; };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NavContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: NavContainerComponent, selector: "nova-nav-container", inputs: { nav: "nav" }, ngImport: i0, template: "<nova-nav [props]=\"nav\" (onCollapsed)=\"onCollapsed($event)\" [@toggleNavigation]=\"collapsed ? 'negative' : 'normal'\">\n  <ng-container modal>\n    <ng-content select=\"[modal]\"></ng-content>\n  </ng-container>\n  <ng-container>\n    <ng-content select=\"[list]\"></ng-content>\n  </ng-container>\n</nova-nav>\n<div class=\"content\" [@toggleNavigation]=\"collapsed ? 'normal' : 'positive'\">\n  <ng-content></ng-content>\n</div>", dependencies: [{ kind: "component", type: i1.NavComponent, selector: "nova-nav", inputs: ["props"], outputs: ["onCollapsed"] }], animations: [
            trigger('toggleNavigation', [
                state('normal', style({
                    marginLeft: '0px'
                })),
                state('negative', style({
                    marginLeft: '-220px'
                })),
                state('positive', style({
                    marginLeft: '220px'
                })),
                transition('* => *', [
                    animate('.3s')
                ])
            ])
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NavContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-nav-container', animations: [
                        trigger('toggleNavigation', [
                            state('normal', style({
                                marginLeft: '0px'
                            })),
                            state('negative', style({
                                marginLeft: '-220px'
                            })),
                            state('positive', style({
                                marginLeft: '220px'
                            })),
                            transition('* => *', [
                                animate('.3s')
                            ])
                        ])
                    ], template: "<nova-nav [props]=\"nav\" (onCollapsed)=\"onCollapsed($event)\" [@toggleNavigation]=\"collapsed ? 'negative' : 'normal'\">\n  <ng-container modal>\n    <ng-content select=\"[modal]\"></ng-content>\n  </ng-container>\n  <ng-container>\n    <ng-content select=\"[list]\"></ng-content>\n  </ng-container>\n</nova-nav>\n<div class=\"content\" [@toggleNavigation]=\"collapsed ? 'normal' : 'positive'\">\n  <ng-content></ng-content>\n</div>" }]
        }], propDecorators: { nav: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3ZhZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9uYXYtY29udGFpbmVyL25hdi1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbmF2LWNvbnRhaW5lci9uYXYtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQXdCakYsTUFBTSxPQUFPLHFCQUFxQjtJQXBCbEM7UUFzQkUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUdsQixnQkFBVyxHQUFHLENBQUMsU0FBa0IsRUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUEsQ0FBQyxDQUFDLENBQUM7S0FDckY7OEdBTlkscUJBQXFCO2tHQUFyQixxQkFBcUIsa0ZDekJsQyxvYkFVTSwrSURGUTtZQUNWLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtnQkFDMUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7b0JBQ3BCLFVBQVUsRUFBRSxLQUFLO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7b0JBQ3RCLFVBQVUsRUFBRSxRQUFRO2lCQUNyQixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7b0JBQ3RCLFVBQVUsRUFBRSxPQUFPO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDZixDQUFDO2FBQ0gsQ0FBQztTQUNIOzsyRkFFVSxxQkFBcUI7a0JBcEJqQyxTQUFTOytCQUNFLG9CQUFvQixjQUVsQjt3QkFDVixPQUFPLENBQUMsa0JBQWtCLEVBQUU7NEJBQzFCLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNwQixVQUFVLEVBQUUsS0FBSzs2QkFDbEIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2dDQUN0QixVQUFVLEVBQUUsUUFBUTs2QkFDckIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2dDQUN0QixVQUFVLEVBQUUsT0FBTzs2QkFDcEIsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUM7NkJBQ2YsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOzhCQUtRLEdBQUc7c0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9uYXYvbmF2JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92YS1uYXYtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigndG9nZ2xlTmF2aWdhdGlvbicsIFtcbiAgICAgIHN0YXRlKCdub3JtYWwnLCBzdHlsZSh7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnbmVnYXRpdmUnLCBzdHlsZSh7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICctMjIwcHgnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgncG9zaXRpdmUnLCBzdHlsZSh7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICcyMjBweCdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gKicsIFtcbiAgICAgICAgYW5pbWF0ZSgnLjNzJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb250YWluZXJDb21wb25lbnQge1xuXG4gIGNvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuYXYhOiBOYXY7XG5cbiAgcmVhZG9ubHkgb25Db2xsYXBzZWQgPSAoY29sbGFwc2VkOiBib29sZWFuKTogdm9pZCA9PiB7IHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkIH07XG59XG4iLCI8bm92YS1uYXYgW3Byb3BzXT1cIm5hdlwiIChvbkNvbGxhcHNlZCk9XCJvbkNvbGxhcHNlZCgkZXZlbnQpXCIgW0B0b2dnbGVOYXZpZ2F0aW9uXT1cImNvbGxhcHNlZCA/ICduZWdhdGl2ZScgOiAnbm9ybWFsJ1wiPlxuICA8bmctY29udGFpbmVyIG1vZGFsPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlttb2RhbF1cIj48L25nLWNvbnRlbnQ+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltsaXN0XVwiPjwvbmctY29udGVudD5cbiAgPC9uZy1jb250YWluZXI+XG48L25vdmEtbmF2PlxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBbQHRvZ2dsZU5hdmlnYXRpb25dPVwiY29sbGFwc2VkID8gJ25vcm1hbCcgOiAncG9zaXRpdmUnXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PiJdfQ==