import { Component, ContentChild, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TableComponent {
    set data(dataSource) {
        this._data = dataSource;
    }
    set displayedColumns(columns) {
        this._columns = columns;
    }
    constructor() { }
    ngOnInit() {
        if (this._columns === undefined)
            this._columns = Object.keys(this._data[0]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: TableComponent, selector: "nova-table", inputs: { data: "data", displayedColumns: "displayedColumns" }, queries: [{ propertyName: "headCellTemplateRef", first: true, predicate: ["HeadCell"], descendants: true }, { propertyName: "cellTemplateRef", first: true, predicate: ["Cell"], descendants: true }], ngImport: i0, template: "<table class=\"table\">\n  <thead class=\"table__thead\">\n    <tr class=\"table__tr\">\n      <th *ngFor=\"let column of _columns\">{{column}}</th>\n      <ng-container *ngIf=\"headCellTemplateRef\" [ngTemplateOutlet]=\"headCellTemplateRef\"></ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"table__tbody\">\n    <tr class=\"table__tr\" *ngFor=\"let row of _data\">\n      <td *ngFor=\"let col of _columns\">{{row[col]}}</td>\n      <ng-container *ngIf=\"cellTemplateRef\" [ngTemplateOutlet]=\"cellTemplateRef\"\n        [ngTemplateOutletContext]=\"{$implicit:row}\"></ng-container>\n    </tr>\n  </tbody>\n</table>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-table', template: "<table class=\"table\">\n  <thead class=\"table__thead\">\n    <tr class=\"table__tr\">\n      <th *ngFor=\"let column of _columns\">{{column}}</th>\n      <ng-container *ngIf=\"headCellTemplateRef\" [ngTemplateOutlet]=\"headCellTemplateRef\"></ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"table__tbody\">\n    <tr class=\"table__tr\" *ngFor=\"let row of _data\">\n      <td *ngFor=\"let col of _columns\">{{row[col]}}</td>\n      <ng-container *ngIf=\"cellTemplateRef\" [ngTemplateOutlet]=\"cellTemplateRef\"\n        [ngTemplateOutletContext]=\"{$implicit:row}\"></ng-container>\n    </tr>\n  </tbody>\n</table>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input
            }], displayedColumns: [{
                type: Input
            }], headCellTemplateRef: [{
                type: ContentChild,
                args: ['HeadCell']
            }], cellTemplateRef: [{
                type: ContentChild,
                args: ['Cell']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7O0FBTXBGLE1BQU0sT0FBTyxjQUFjO0lBSXpCLElBQWEsSUFBSSxDQUFDLFVBQWlCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFhLGdCQUFnQixDQUFDLE9BQWlCO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQztJQUtqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OEdBbEJVLGNBQWM7a0dBQWQsY0FBYyx5VENOM0IsaW5CQWNROzsyRkRSSyxjQUFjO2tCQUoxQixTQUFTOytCQUNFLFlBQVk7MEVBT1QsSUFBSTtzQkFBaEIsS0FBSztnQkFHTyxnQkFBZ0I7c0JBQTVCLEtBQUs7Z0JBTW9CLG1CQUFtQjtzQkFBNUMsWUFBWTt1QkFBQyxVQUFVO2dCQUNGLGVBQWU7c0JBQXBDLFlBQVk7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZhLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfZGF0YSE6IGFueVtdO1xuICBfY29sdW1ucyE6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpIHNldCBkYXRhKGRhdGFTb3VyY2U6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGFTb3VyY2U7XG4gIH1cbiAgQElucHV0KCkgc2V0IGRpc3BsYXllZENvbHVtbnMoY29sdW1uczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQENvbnRlbnRDaGlsZCgnSGVhZENlbGwnKSBoZWFkQ2VsbFRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZCgnQ2VsbCcpIGNlbGxUZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMgPT09IHVuZGVmaW5lZCkgdGhpcy5fY29sdW1ucyA9IE9iamVjdC5rZXlzKHRoaXMuX2RhdGFbMF0pO1xuICB9XG5cbn1cbiIsIjx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gIDx0aGVhZCBjbGFzcz1cInRhYmxlX190aGVhZFwiPlxuICAgIDx0ciBjbGFzcz1cInRhYmxlX190clwiPlxuICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgX2NvbHVtbnNcIj57e2NvbHVtbn19PC90aD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWFkQ2VsbFRlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZENlbGxUZW1wbGF0ZVJlZlwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keSBjbGFzcz1cInRhYmxlX190Ym9keVwiPlxuICAgIDx0ciBjbGFzcz1cInRhYmxlX190clwiICpuZ0Zvcj1cImxldCByb3cgb2YgX2RhdGFcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sIG9mIF9jb2x1bW5zXCI+e3tyb3dbY29sXX19PC90ZD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjZWxsVGVtcGxhdGVSZWZcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsVGVtcGxhdGVSZWZcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDpyb3d9XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+Il19