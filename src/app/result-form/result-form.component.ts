import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Match, MatchService } from '../core';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss'],
})
export class ResultFormComponent implements OnInit {
  matchForm!: FormGroup;
  match: Match | undefined;
  isFormLoading: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService
  ) {
    this.isFormLoading = false;
  }

  ngOnInit() {
    this.matchForm = this.formBuilder.group({
      teamAName: new FormControl('', [Validators.required]),
      teamAScore: new FormControl(0),
      teamBName: new FormControl(''),
      teamBScore: new FormControl(0),
      date: new FormControl(''),
    });

    this.route.params.subscribe((params) => {
      if (params.id) {
        const match = this.matchService.getMatch(params.id);
        if (match) {
          this.match = match;
          let date = new Date(match.date).toISOString().split('T')[0];
          console.log(match.date, date);
          this.matchForm.setValue({
            teamAName: match.teamA.name,
            teamAScore: match.teamA.score,
            teamBName: match.teamB.name,
            teamBScore: match.teamB.score,
            date,
          });
        }
      }
    });
  }

  onSubmit() {
    this.isFormLoading = true;
    console.log('submitting form', this.matchForm), this.match?.id;

    const { teamAName, teamAScore, teamBName, teamBScore, date } =
      this.matchForm.value;
    const match = {
      teamA: {
        name: teamAName,
        score: teamAScore,
      },
      teamB: {
        name: teamBName,
        score: teamBScore,
      },
      date: date,
    };
    if (this.match?.id) {
      this.matchService.updateMatch({ ...match, id: this.match.id });
    } else {
      let matchResponse = this.matchService.createMatch(match);
      this.router.navigateByUrl(`/result/edit/${matchResponse.id}`);
    }
    this.isFormLoading = false;
  }
}
