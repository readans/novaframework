import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icon/icon.component";
export class SelectComponent {
    set options(options) {
        this._options = options !== null ? options : [];
        this.selected = this._options[0] || [{ key: '', value: '' }];
        this._options[0] !== undefined && this.onSelected.emit(this.selected);
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.onSelected = new EventEmitter();
        this.showOptions = false;
    }
    ngAfterContentInit() {
        this.onSelected.subscribe((option) => {
            this.selected = option;
            this.showOptions = false;
        });
    }
    onDocumentClick(event) {
        if (this.elementRef.nativeElement.contains(event.target))
            return;
        this.showOptions = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: SelectComponent, selector: "nova-select", inputs: { options: "options" }, outputs: { onSelected: "onSelected" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, ngImport: i0, template: "<div class=\"select\">\n  <div class=\"selected\" [ngClass]=\"{'active':showOptions}\" (click)=\"showOptions = !showOptions\">\n    <span class=\"selected-value\">{{selected.key}}</span>\n    <nova-icon fontIcon=\"chevron\" [ngClass]=\"{'rotate' : showOptions }\"></nova-icon>\n  </div>\n  <div class=\"options\" *ngIf=\"showOptions\">\n    <div class=\"option\" [ngClass]=\"{'active': selected == option}\" *ngFor=\"let option of _options\"\n      (click)=\"onSelected.emit(option)\">\n      {{option.key}}\n    </div>\n  </div>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.IconComponent, selector: "nova-icon", inputs: ["fontIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-select', template: "<div class=\"select\">\n  <div class=\"selected\" [ngClass]=\"{'active':showOptions}\" (click)=\"showOptions = !showOptions\">\n    <span class=\"selected-value\">{{selected.key}}</span>\n    <nova-icon fontIcon=\"chevron\" [ngClass]=\"{'rotate' : showOptions }\"></nova-icon>\n  </div>\n  <div class=\"options\" *ngIf=\"showOptions\">\n    <div class=\"option\" [ngClass]=\"{'active': selected == option}\" *ngFor=\"let option of _options\"\n      (click)=\"onSelected.emit(option)\">\n      {{option.key}}\n    </div>\n  </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { options: [{
                type: Input,
                args: ['options']
            }], onSelected: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQW9CLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBWSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNN0gsTUFBTSxPQUFPLGVBQWU7SUFHMUIsSUFBc0IsT0FBTyxDQUFDLE9BQXVDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBT0QsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTnRCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUdqRSxnQkFBVyxHQUFZLEtBQUssQ0FBQztJQUl6QixDQUFDO0lBRUwsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBNkIsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELGVBQWUsQ0FBQyxLQUFZO1FBQzFCLElBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE2QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBYyxDQUFDO1lBQUUsT0FBTztRQUMxRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzhHQTdCVSxlQUFlO2tHQUFmLGVBQWUsZ01DUDVCLDJoQkFXTTs7MkZESk8sZUFBZTtrQkFKM0IsU0FBUzsrQkFDRSxhQUFhO2lHQU1ELE9BQU87c0JBQTVCLEtBQUs7dUJBQUMsU0FBUztnQkFNTixVQUFVO3NCQUFuQixNQUFNO2dCQWlCUCxlQUFlO3NCQURkLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZhLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBfb3B0aW9ucyE6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xuICBASW5wdXQoJ29wdGlvbnMnKSBzZXQgb3B0aW9ucyhvcHRpb25zOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSB8IG51bGwpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyAhPT0gbnVsbCA/IG9wdGlvbnMgOiBbXTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5fb3B0aW9uc1swXSB8fCBbeyBrZXk6ICcnLCB2YWx1ZTogJycgfV07XG4gICAgdGhpcy5fb3B0aW9uc1swXSAhPT0gdW5kZWZpbmVkICYmIHRoaXMub25TZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEtleVZhbHVlPHN0cmluZywgYW55Pj4oKTtcblxuICBzZWxlY3RlZCE6IEtleVZhbHVlPHN0cmluZywgYW55PjtcbiAgc2hvd09wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblNlbGVjdGVkLnN1YnNjcmliZSgob3B0aW9uOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb247XG4gICAgICB0aGlzLnNob3dPcHRpb25zID0gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICgodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSkgcmV0dXJuO1xuICAgIHRoaXMuc2hvd09wdGlvbnMgPSBmYWxzZTtcbiAgfVxuXG59IiwiPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWRcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6c2hvd09wdGlvbnN9XCIgKGNsaWNrKT1cInNob3dPcHRpb25zID0gIXNob3dPcHRpb25zXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiPnt7c2VsZWN0ZWQua2V5fX08L3NwYW4+XG4gICAgPG5vdmEtaWNvbiBmb250SWNvbj1cImNoZXZyb25cIiBbbmdDbGFzc109XCJ7J3JvdGF0ZScgOiBzaG93T3B0aW9ucyB9XCI+PC9ub3ZhLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiICpuZ0lmPVwic2hvd09wdGlvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBzZWxlY3RlZCA9PSBvcHRpb259XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfb3B0aW9uc1wiXG4gICAgICAoY2xpY2spPVwib25TZWxlY3RlZC5lbWl0KG9wdGlvbilcIj5cbiAgICAgIHt7b3B0aW9uLmtleX19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Il19