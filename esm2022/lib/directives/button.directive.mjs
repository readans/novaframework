import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.classList = ["nova-button"];
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.3", type: ButtonDirective, selector: "[nova-button]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nova-button]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9kaXJlY3RpdmVzL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3BFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhmLGNBQVMsR0FBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBSW5ELENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFc0IsT0FBTztRQUM1QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE2QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2pDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1NBQzlCLEVBQUU7WUFDRCxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztRQUNILGFBQWEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9DLENBQUM7OEdBdkJVLGVBQWU7a0dBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7aUdBY3dCLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZhLWJ1dHRvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtcIm5vdmEtYnV0dG9uXCJdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3ZhLWJ1dHRvbi1yaXBwbGUnKTtcbiAgICAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGNvbnN0IHNwYW5BbmltYXRpb24gPSBzcGFuLmFuaW1hdGUoW1xuICAgICAgeyB3aWR0aDogJzEwMCUnLCBvcGFjaXR5OiAwIH0sXG4gICAgXSwge1xuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pO1xuICAgIHNwYW5BbmltYXRpb24ub25maW5pc2ggPSAoKSA9PiBzcGFuLnJlbW92ZSgpO1xuICB9XG5cbn1cbiJdfQ==