import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class IconButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.classList = ["nova-icon-button"];
    }
    ngOnInit() {
        this.classList.forEach((className) => this.elementRef.nativeElement.classList.add(className));
    }
    onClick() {
        const span = document.createElement('span');
        span.setAttribute('class', 'nova-button-ripple');
        this.elementRef.nativeElement.appendChild(span);
        const spanAnimation = span.animate([
            { width: '100%', opacity: 0 },
        ], {
            duration: 200
        });
        spanAnimation.onfinish = () => span.remove();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: IconButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.3", type: IconButtonDirective, selector: "[nova-icon-button]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: IconButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nova-icon-button]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2RpcmVjdGl2ZXMvaWNvbi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUs1RSxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhmLGNBQVMsR0FBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFJeEQsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVzQixPQUFPO1FBQzVCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQTZCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7U0FDOUIsRUFBRTtZQUNELFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0MsQ0FBQzs4R0F2QlUsbUJBQW1CO2tHQUFuQixtQkFBbUI7OzJGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7aUdBY3dCLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdmEtaWNvbi1idXR0b25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJY29uQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW1wibm92YS1pY29uLWJ1dHRvblwiXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT5cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbm92YS1idXR0b24tcmlwcGxlJyk7XG4gICAgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBjb25zdCBzcGFuQW5pbWF0aW9uID0gc3Bhbi5hbmltYXRlKFtcbiAgICAgIHsgd2lkdGg6ICcxMDAlJywgb3BhY2l0eTogMCB9LFxuICAgIF0sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KTtcbiAgICBzcGFuQW5pbWF0aW9uLm9uZmluaXNoID0gKCkgPT4gc3Bhbi5yZW1vdmUoKTtcbiAgfVxuXG59XG4iXX0=