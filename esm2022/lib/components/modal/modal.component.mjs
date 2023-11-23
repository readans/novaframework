import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon.component";
import * as i2 from "../../directives/icon-button.directive";
export class ModalComponent {
    constructor(modalElementRef) {
        this.modalElementRef = modalElementRef;
        this.closed = new EventEmitter();
    }
    onClick(elem) {
        if (!elem.contains(this.modalElementRef.nativeElement))
            return;
        this.closed.emit(true);
    }
    onClose() {
        this.closed.emit(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ModalComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: ModalComponent, selector: "nova-modal", outputs: { closed: "closed" }, host: { listeners: { "click": "onClick($event.target)" } }, ngImport: i0, template: "<div class=\"modal__container\">\n  <button nova-icon-button class=\"modal__close\" (click)=\"onClose()\">\n    <nova-icon fontIcon=\"close\"></nova-icon>\n  </button>\n  <div class=\"modal__content\">\n    <ng-content></ng-content>\n  </div>\n</div>", dependencies: [{ kind: "component", type: i1.IconComponent, selector: "nova-icon", inputs: ["fontIcon"] }, { kind: "directive", type: i2.IconButtonDirective, selector: "[nova-icon-button]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-modal', template: "<div class=\"modal__container\">\n  <button nova-icon-button class=\"modal__close\" (click)=\"onClose()\">\n    <nova-icon fontIcon=\"close\"></nova-icon>\n  </button>\n  <div class=\"modal__content\">\n    <ng-content></ng-content>\n  </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { closed: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU0xRixNQUFNLE9BQU8sY0FBYztJQUd6QixZQUNVLGVBQTJCO1FBQTNCLG9CQUFlLEdBQWYsZUFBZSxDQUFZO1FBSDNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBSTNDLENBQUM7SUFFcUMsT0FBTyxDQUFDLElBQWE7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7WUFBRSxPQUFPO1FBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs4R0FkVSxjQUFjO2tHQUFkLGNBQWMsNklDTjNCLDRQQU9NOzsyRkRETyxjQUFjO2tCQUoxQixTQUFTOytCQUNFLFlBQVk7aUdBSVosTUFBTTtzQkFBZixNQUFNO2dCQU1tQyxPQUFPO3NCQUFoRCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZhLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge1xuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxFbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhlbGVtOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFlbGVtLmNvbnRhaW5zKHRoaXMubW9kYWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKSByZXR1cm47XG4gICAgdGhpcy5jbG9zZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZWQuZW1pdCh0cnVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIj5cbiAgPGJ1dHRvbiBub3ZhLWljb24tYnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiPlxuICAgIDxub3ZhLWljb24gZm9udEljb249XCJjbG9zZVwiPjwvbm92YS1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==