import { Component, Input } from '@angular/core';
import { Match } from 'src/app/core';

@Component({
  selector: 'match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
})
export class MatchDetailComponent {
  @Input()
  match: Match | undefined;

  constructor() {}
}
