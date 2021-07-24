import { Component, OnInit } from '@angular/core';
import { Match, MatchService } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  matches: Match[];
  matchService: MatchService;
  constructor(matchService: MatchService) {
    this.matchService = matchService;
    this.matches = [];
  }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((val) => {
      this.matches = val;
    });
  }
}
