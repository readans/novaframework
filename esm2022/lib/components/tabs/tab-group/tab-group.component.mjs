import { Component, ContentChildren, EventEmitter, Output } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabGroupComponent {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this.selectTabIndex = new EventEmitter();
        this.selectionSub = Subscription.EMPTY;
        this.loadTabView = (tabIndex) => {
            this._viewContainerRef.detach();
            this.tabSelected = this._tabs.find((tab, index) => index === tabIndex);
            this._tabs.forEach((tab, index) => tab.isActive = index === tabIndex);
            if (this.tabSelected !== undefined)
                this._viewContainerRef.createEmbeddedView(this.tabSelected._content);
        };
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.selectionSub = this.selectTabIndex.subscribe(this.loadTabView);
        this.selectTabIndex.emit(0);
    }
    ngOnDestroy() {
        this.selectionSub.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: TabGroupComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: TabGroupComponent, selector: "nova-tab-group", outputs: { selectTabIndex: "selectTabIndex" }, queries: [{ propertyName: "_tabs", predicate: TabComponent }], ngImport: i0, template: "<ul class=\"tab-header\">\n  <li class=\"tab\" [ngClass]=\"{'active': tab.isActive}\" *ngFor=\"let tab of _tabs; let i = index\"\n    (click)=\"this.selectTabIndex.emit(i)\">\n    {{tab._label}}\n  </li>\n</ul>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: TabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-tab-group', template: "<ul class=\"tab-header\">\n  <li class=\"tab\" [ngClass]=\"{'active': tab.isActive}\" *ngFor=\"let tab of _tabs; let i = index\"\n    (click)=\"this.selectTabIndex.emit(i)\">\n    {{tab._label}}\n  </li>\n</ul>" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { _tabs: [{
                type: ContentChildren,
                args: [TabComponent]
            }], selectTabIndex: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL3RhYnMvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3ZhZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy90YWJzL3RhYi1ncm91cC90YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUdaLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTXBDLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUIsWUFDVSxpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQU5uQyxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BFLGlCQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQW9CakMsZ0JBQVcsR0FBRyxDQUFDLFFBQWdCLEVBQVEsRUFBRTtZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNHLENBQUMsQ0FBQztJQW5CRSxDQUFDO0lBRUwsUUFBUTtJQUNSLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OEdBdEJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLDJIQUVYLFlBQVksNkJDcEIvQixvTkFLSzs7MkZEYVEsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLGdCQUFnQjt1R0FLSyxLQUFLO3NCQUFuQyxlQUFlO3VCQUFDLFlBQVk7Z0JBQ25CLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIvdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92YS10YWItZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIF90YWJzICE6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xuICBAT3V0cHV0KCkgc2VsZWN0VGFiSW5kZXg6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIHByaXZhdGUgc2VsZWN0aW9uU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIHRhYlNlbGVjdGVkITogVGFiQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGlvblN1YiA9IHRoaXMuc2VsZWN0VGFiSW5kZXguc3Vic2NyaWJlKHRoaXMubG9hZFRhYlZpZXcpO1xuICAgIHRoaXMuc2VsZWN0VGFiSW5kZXguZW1pdCgwKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25TdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGxvYWRUYWJWaWV3ID0gKHRhYkluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgIHRoaXMudGFiU2VsZWN0ZWQgPSB0aGlzLl90YWJzLmZpbmQoKHRhYiwgaW5kZXgpID0+IGluZGV4ID09PSB0YWJJbmRleCk7XG4gICAgdGhpcy5fdGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gdGFiSW5kZXgpO1xuICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGFiU2VsZWN0ZWQuX2NvbnRlbnQpO1xuICB9O1xuXG59XG4iLCI8dWwgY2xhc3M9XCJ0YWItaGVhZGVyXCI+XG4gIDxsaSBjbGFzcz1cInRhYlwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogdGFiLmlzQWN0aXZlfVwiICpuZ0Zvcj1cImxldCB0YWIgb2YgX3RhYnM7IGxldCBpID0gaW5kZXhcIlxuICAgIChjbGljayk9XCJ0aGlzLnNlbGVjdFRhYkluZGV4LmVtaXQoaSlcIj5cbiAgICB7e3RhYi5fbGFiZWx9fVxuICA8L2xpPlxuPC91bD4iXX0=