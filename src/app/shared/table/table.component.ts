import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
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
