import { AfterContentInit, EventEmitter, OnDestroy, OnInit, QueryList, ViewContainerRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import * as i0 from "@angular/core";
export declare class TabGroupComponent implements OnInit, AfterContentInit, OnDestroy {
    private _viewContainerRef;
    _tabs: QueryList<TabComponent>;
    selectTabIndex: EventEmitter<number>;
    private selectionSub;
    tabSelected: TabComponent | undefined;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    readonly loadTabView: (tabIndex: number) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupComponent, "nova-tab-group", never, {}, { "selectTabIndex": "selectTabIndex"; }, ["_tabs"], never, false, never>;
}
