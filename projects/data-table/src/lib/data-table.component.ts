import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnChanges {
  @Input()
  records: any[];
  @Input()
  caption!: string;

  keys: string[];

  constructor() {
    this.keys = [];
    this.records = [];
  }

  ngOnChanges() {
    this.keys = Object.keys(this.records[0]);
  }
}
