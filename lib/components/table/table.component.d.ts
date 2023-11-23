import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableComponent implements OnInit {
    _data: any[];
    _columns: string[];
    set data(dataSource: any[]);
    set displayedColumns(columns: string[]);
    constructor();
    headCellTemplateRef: TemplateRef<any>;
    cellTemplateRef: TemplateRef<any>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "nova-table", never, { "data": { "alias": "data"; "required": false; }; "displayedColumns": { "alias": "displayedColumns"; "required": false; }; }, {}, ["headCellTemplateRef", "cellTemplateRef"], never, false, never>;
}
