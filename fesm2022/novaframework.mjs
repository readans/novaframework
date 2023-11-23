import * as i0 from '@angular/core';
import { Component, Input, ContentChild, Directive, HostListener, EventEmitter, Output, TemplateRef, ViewChild, ContentChildren, NgModule, Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

class TableComponent {
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

class IconComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: IconComponent, selector: "nova-icon", inputs: { fontIcon: "fontIcon" }, ngImport: i0, template: "<ng-container [ngSwitch]=\"fontIcon\">\n  <ng-container *ngSwitchCase=\"'pencil'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'download'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'hamburger'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'bell'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'check'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'config'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z\" />\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ellipsis-x'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ellipsis-y'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'search'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'plus'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 4.5v15m7.5-7.5h-15\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'share'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'user'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'close'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'heart'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'like'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'trash'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'chevron'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 8.25l-7.5 7.5-7.5-7.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'arrow-rectangle'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\">\n      <path fill-rule=\"evenodd\"\n        d=\"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z\"\n        clip-rule=\"evenodd\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'squares'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'card'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'deposit'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'banknotes'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'truck'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'dollar'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'light-bulb'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'document'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'cube'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'clipboard'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'airplane'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'shopping-cart'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z\" />\n    </svg>\n  </ng-container>\n</ng-container>", dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-icon', template: "<ng-container [ngSwitch]=\"fontIcon\">\n  <ng-container *ngSwitchCase=\"'pencil'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'download'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'hamburger'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'bell'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'check'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'config'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z\" />\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ellipsis-x'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ellipsis-y'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'search'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'plus'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 4.5v15m7.5-7.5h-15\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'share'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'user'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'close'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'heart'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'like'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'trash'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'chevron'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 8.25l-7.5 7.5-7.5-7.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'arrow-rectangle'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\">\n      <path fill-rule=\"evenodd\"\n        d=\"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z\"\n        clip-rule=\"evenodd\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'squares'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'card'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'deposit'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'banknotes'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'truck'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'dollar'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'light-bulb'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'document'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'cube'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'clipboard'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'airplane'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5\" />\n    </svg>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'shopping-cart'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n      class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n        d=\"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z\" />\n    </svg>\n  </ng-container>\n</ng-container>" }]
        }], propDecorators: { fontIcon: [{
                type: Input
            }] } });

class ButtonDirective {
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

class IconButtonDirective {
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

class ModalComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: ModalComponent, selector: "nova-modal", outputs: { closed: "closed" }, host: { listeners: { "click": "onClick($event.target)" } }, ngImport: i0, template: "<div class=\"modal__container\">\n  <button nova-icon-button class=\"modal__close\" (click)=\"onClose()\">\n    <nova-icon fontIcon=\"close\"></nova-icon>\n  </button>\n  <div class=\"modal__content\">\n    <ng-content></ng-content>\n  </div>\n</div>", dependencies: [{ kind: "component", type: IconComponent, selector: "nova-icon", inputs: ["fontIcon"] }, { kind: "directive", type: IconButtonDirective, selector: "[nova-icon-button]" }] }); }
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

class NavComponent {
    constructor() {
        this.showModal = false;
        this.collapsed = false;
        this.onCollapsed = new EventEmitter();
        this.onCloseModal = (closed) => this.showModal = !closed;
    }
    collapseItem(item) {
        item.collapsed = !item.collapsed;
        this.props.items.map((value) => {
            if (value !== item) {
                value.collapsed = false;
            }
        });
    }
    collapseNav() {
        this.collapsed = !this.collapsed;
        this.onCollapsed.emit(this.collapsed);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: NavComponent, selector: "nova-nav", inputs: { props: "props" }, outputs: { onCollapsed: "onCollapsed" }, ngImport: i0, template: "<div class=\"container\">\n  <div class=\"profile\">\n    <div class=\"profile__picture\">\n      <label class=\"profile__letter\">\n        {{this.props.userName.charAt(0) | uppercase}}\n      </label>\n      <div class=\"profile__edit-icon\" (click)=\"showModal = true\">\n        <nova-icon fontIcon=\"pencil\"></nova-icon>\n      </div>\n    </div>\n    <label class=\"app-name\">{{this.props.appName}}</label>\n    <label class=\"user-name\">{{this.props.userName}}</label>\n  </div>\n  <nav>\n    <ul class=\"list\">\n      <li *ngFor=\"let item of this.props.items\" class=\"list__item\">\n        <div class=\"item\" [ngClass]=\"{'collapsable': item.options}\" (click)=\"collapseItem(item)\" [routerLink]=\"item.url\"\n          routerLinkActive=\"active\">\n          <div class=\"item__left\">\n            <nova-icon [fontIcon]=\"item.icon\"></nova-icon>\n            <!-- <label>{{item.text | specialChar | titlecase}}</label> -->\n            <h4 class=\"item__text\">{{item.text}}</h4>\n          </div>\n          <nova-icon fontIcon=\"chevron\" *ngIf=\"item.options\" [ngClass]=\"{'rotate' : item.collapsed}\"></nova-icon>\n        </div>\n        <ul *ngIf=\"item.options\" [ngClass]=\"{'hidden' : !item.collapsed}\" class=\"sublist\">\n          <li *ngFor=\"let option of item.options\" [routerLink]=\"option.url\" routerLinkActive=\"active\"\n            (click)=\"option.onAction()\" class=\"sublist__option\">\n            <nova-icon *ngIf=\"option.icon\" [fontIcon]=\"option.icon\"></nova-icon>\n            <!-- <label>{{item.text | specialChar | titlecase}}</label> -->\n            <h4 class=\"option__text\">{{option.text}}</h4>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <div class=\"list-extend\">\n      <div class=\"line\"></div>\n      <ng-content></ng-content>\n    </div>\n  </nav>\n  <div class=\"bottom-content\">\n    <button nova-button (click)=\"this.props.onLogout()\" class=\"button-logout\">\n      <nova-icon fontIcon=\"arrow-rectangle\"></nova-icon> Cerrar Sesi\u00F3n\n    </button>\n    <div class=\"info-session\">\n      <h5>\u00DAltima conexion</h5>\n      <p>{{this.props.date}}</p>\n    </div>\n  </div>\n</div>\n\n<button (click)=\"collapseNav()\" class=\"toggle-nav\">\n  <nova-icon [fontIcon]=\"collapsed ? 'close' : 'hamburger'\"></nova-icon>\n</button>\n\n<nova-modal *ngIf=\"showModal\" (closed)=\"onCloseModal($event)\">\n  <ng-content select=\"[modal]\"></ng-content>\n</nova-modal>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: IconComponent, selector: "nova-icon", inputs: ["fontIcon"] }, { kind: "directive", type: ButtonDirective, selector: "[nova-button]" }, { kind: "component", type: ModalComponent, selector: "nova-modal", outputs: ["closed"] }, { kind: "pipe", type: i1.UpperCasePipe, name: "uppercase" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nova-nav', template: "<div class=\"container\">\n  <div class=\"profile\">\n    <div class=\"profile__picture\">\n      <label class=\"profile__letter\">\n        {{this.props.userName.charAt(0) | uppercase}}\n      </label>\n      <div class=\"profile__edit-icon\" (click)=\"showModal = true\">\n        <nova-icon fontIcon=\"pencil\"></nova-icon>\n      </div>\n    </div>\n    <label class=\"app-name\">{{this.props.appName}}</label>\n    <label class=\"user-name\">{{this.props.userName}}</label>\n  </div>\n  <nav>\n    <ul class=\"list\">\n      <li *ngFor=\"let item of this.props.items\" class=\"list__item\">\n        <div class=\"item\" [ngClass]=\"{'collapsable': item.options}\" (click)=\"collapseItem(item)\" [routerLink]=\"item.url\"\n          routerLinkActive=\"active\">\n          <div class=\"item__left\">\n            <nova-icon [fontIcon]=\"item.icon\"></nova-icon>\n            <!-- <label>{{item.text | specialChar | titlecase}}</label> -->\n            <h4 class=\"item__text\">{{item.text}}</h4>\n          </div>\n          <nova-icon fontIcon=\"chevron\" *ngIf=\"item.options\" [ngClass]=\"{'rotate' : item.collapsed}\"></nova-icon>\n        </div>\n        <ul *ngIf=\"item.options\" [ngClass]=\"{'hidden' : !item.collapsed}\" class=\"sublist\">\n          <li *ngFor=\"let option of item.options\" [routerLink]=\"option.url\" routerLinkActive=\"active\"\n            (click)=\"option.onAction()\" class=\"sublist__option\">\n            <nova-icon *ngIf=\"option.icon\" [fontIcon]=\"option.icon\"></nova-icon>\n            <!-- <label>{{item.text | specialChar | titlecase}}</label> -->\n            <h4 class=\"option__text\">{{option.text}}</h4>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <div class=\"list-extend\">\n      <div class=\"line\"></div>\n      <ng-content></ng-content>\n    </div>\n  </nav>\n  <div class=\"bottom-content\">\n    <button nova-button (click)=\"this.props.onLogout()\" class=\"button-logout\">\n      <nova-icon fontIcon=\"arrow-rectangle\"></nova-icon> Cerrar Sesi\u00F3n\n    </button>\n    <div class=\"info-session\">\n      <h5>\u00DAltima conexion</h5>\n      <p>{{this.props.date}}</p>\n    </div>\n  </div>\n</div>\n\n<button (click)=\"collapseNav()\" class=\"toggle-nav\">\n  <nova-icon [fontIcon]=\"collapsed ? 'close' : 'hamburger'\"></nova-icon>\n</button>\n\n<nova-modal *ngIf=\"showModal\" (closed)=\"onCloseModal($event)\">\n  <ng-content select=\"[modal]\"></ng-content>\n</nova-modal>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { props: [{
                type: Input
            }], onCollapsed: [{
                type: Output
            }] } });

class NavContainerComponent {
    constructor() {
        this.collapsed = false;
        this.onCollapsed = (collapsed) => { this.collapsed = collapsed; };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NavContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: NavContainerComponent, selector: "nova-nav-container", inputs: { nav: "nav" }, ngImport: i0, template: "<nova-nav [props]=\"nav\" (onCollapsed)=\"onCollapsed($event)\" [@toggleNavigation]=\"collapsed ? 'negative' : 'normal'\">\n  <ng-container modal>\n    <ng-content select=\"[modal]\"></ng-content>\n  </ng-container>\n  <ng-container>\n    <ng-content select=\"[list]\"></ng-content>\n  </ng-container>\n</nova-nav>\n<div class=\"content\" [@toggleNavigation]=\"collapsed ? 'normal' : 'positive'\">\n  <ng-content></ng-content>\n</div>", dependencies: [{ kind: "component", type: NavComponent, selector: "nova-nav", inputs: ["props"], outputs: ["onCollapsed"] }], animations: [
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

class TabComponent {
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

class TabGroupComponent {
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

class SelectComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: SelectComponent, selector: "nova-select", inputs: { options: "options" }, outputs: { onSelected: "onSelected" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, ngImport: i0, template: "<div class=\"select\">\n  <div class=\"selected\" [ngClass]=\"{'active':showOptions}\" (click)=\"showOptions = !showOptions\">\n    <span class=\"selected-value\">{{selected.key}}</span>\n    <nova-icon fontIcon=\"chevron\" [ngClass]=\"{'rotate' : showOptions }\"></nova-icon>\n  </div>\n  <div class=\"options\" *ngIf=\"showOptions\">\n    <div class=\"option\" [ngClass]=\"{'active': selected == option}\" *ngFor=\"let option of _options\"\n      (click)=\"onSelected.emit(option)\">\n      {{option.key}}\n    </div>\n  </div>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconComponent, selector: "nova-icon", inputs: ["fontIcon"] }] }); }
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

class NovaframeworkModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NovaframeworkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.3", ngImport: i0, type: NovaframeworkModule, declarations: [TableComponent,
            IconComponent,
            IconButtonDirective,
            ButtonDirective,
            NavComponent,
            NavContainerComponent,
            ModalComponent,
            TabComponent,
            TabGroupComponent,
            SelectComponent], imports: [BrowserAnimationsModule,
            CommonModule,
            RouterModule], exports: [TableComponent,
            IconComponent,
            IconButtonDirective,
            ButtonDirective,
            NavComponent,
            NavContainerComponent,
            ModalComponent,
            TabComponent,
            TabGroupComponent,
            SelectComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NovaframeworkModule, imports: [BrowserAnimationsModule,
            CommonModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: NovaframeworkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        IconComponent,
                        IconButtonDirective,
                        ButtonDirective,
                        NavComponent,
                        NavContainerComponent,
                        ModalComponent,
                        TabComponent,
                        TabGroupComponent,
                        SelectComponent,
                    ],
                    imports: [
                        BrowserAnimationsModule,
                        CommonModule,
                        RouterModule
                    ],
                    exports: [
                        TableComponent,
                        IconComponent,
                        IconButtonDirective,
                        ButtonDirective,
                        NavComponent,
                        NavContainerComponent,
                        ModalComponent,
                        TabComponent,
                        TabGroupComponent,
                        SelectComponent,
                    ]
                }]
        }] });

class CommonService {
    constructor() {
        this.objectByKeys = (obj, keys) => keys.reduce((aux, key) => {
            if (obj[key] !== undefined)
                aux[key] = obj[key];
            return aux;
        }, {});
    }
    capitalizeFirstWord(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: CommonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: CommonService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: CommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of novaframework
 */
/**
 * Modules
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirective, CommonService, IconButtonDirective, IconComponent, ModalComponent, NavComponent, NavContainerComponent, NovaframeworkModule, SelectComponent, TabComponent, TabGroupComponent, TableComponent };
//# sourceMappingURL=novaframework.mjs.map
