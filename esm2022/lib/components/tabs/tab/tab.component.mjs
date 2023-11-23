import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class TabComponent {
    constructor() {
        this.isActive = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: TabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: TabComponent, selector: "nova-tab", inputs: { _label: ["label", "_label"] }, viewQueries: [{ propertyName: "_content", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-tab', template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>" }]
        }], propDecorators: { _content: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], _label: [{
                type: Input,
                args: ['label']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL3RhYnMvdGFiL3RhYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3ZhZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy90YWJzL3RhYi90YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7QUFNdkIsTUFBTSxPQUFPLFlBQVk7SUFKekI7UUFRRSxhQUFRLEdBQVksS0FBSyxDQUFDO0tBRTNCOzhHQU5ZLFlBQVk7a0dBQVosWUFBWSxtSUFFWixXQUFXLDhEQ2J4Qiw0REFFYzs7MkZEU0QsWUFBWTtrQkFKeEIsU0FBUzsrQkFDRSxVQUFVOzhCQUtzQixRQUFRO3NCQUFqRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ3hCLE1BQU07c0JBQXJCLEtBQUs7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdmEtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCB7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgX2NvbnRlbnQhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoJ2xhYmVsJykgX2xhYmVsITogc3RyaW5nO1xuICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG59XG4iLCI8bmctdGVtcGxhdGU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+Il19