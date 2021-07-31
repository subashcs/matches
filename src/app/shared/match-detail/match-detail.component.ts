import { Component, Input, OnChanges } from '@angular/core';
import { Match } from 'src/app/core';

@Component({
  selector: 'match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
})
export class MatchDetailComponent implements OnChanges {
  @Input() match: Match = {
    id: '',
    teamA: { name: '', score: 0 },
    teamB: { name: '', score: 0 },
    date: '',
  };

  routerLinkA: string = '';
  routerLinkB: string = '';

  ngOnChanges() {
    this.routerLinkA = `result/edit/${this.match?.id}`;
    this.routerLinkB = `result/edit/${this.match?.id}`;
  }
}
