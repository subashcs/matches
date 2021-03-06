import { Component, OnInit } from '@angular/core';
import { MatchService, ResultTableData } from '../core';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnInit {
  resultData: ResultTableData[] = [];
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.resultData = this.matchService.getResultTable();
  }
}
