import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { Match, MatchPayload, ResultTableData } from '../models';
import { matches as initialMatchesData } from '../data';
import { v4 } from 'uuid';

@Injectable()
export class MatchService {
  private matches = new BehaviorSubject<Array<Match>>(initialMatchesData);
  private MATCH_STORAGE_KEY = '_MATCH_DATA_LOCAL';

  constructor() {
    const data = this.loadDataFromLocalStorage();
    if (!data) {
      localStorage.setItem(
        this.MATCH_STORAGE_KEY,
        JSON.stringify(initialMatchesData)
      );
    } else {
      this.matches.next(data);
    }
  }

  loadDataFromLocalStorage() {
    return JSON.parse(String(localStorage.getItem(this.MATCH_STORAGE_KEY)));
  }

  getMatches(): Observable<Match[]> {
    return this.matches.asObservable();
  }

  getMatch(id: string): Match | undefined {
    console.log('getMatchCalled');
    const matches = this.matches.value;
    return matches.find((el) => el.id === id);
  }
  createMatch({ teamA, teamB, date }: MatchPayload): Match {
    let match = { id: v4(), teamA, teamB, date };
    const matches = [...this.matches.value, match];
    this.matches.next(matches);
    return match;
  }

  updateMatch(match: Match): Match | undefined {
    const matches = this.matches.value;
    let isUpdateSuccessful = false;
    const updatedMatches = matches.map((item) => {
      if (item.id === match.id) {
        isUpdateSuccessful = true;
        return match;
      }
      return item;
    });
    this.matches.next(updatedMatches);
    return isUpdateSuccessful ? match : undefined;
  }

  getResultTable(): ResultTableData[] {
    const results = this.matches.value.reduce((result, value) => {
      const resultA = result[value.teamA.name];
      const resultB = result[value.teamB.name];
      const isDraw = value.teamA.score === value.teamB.score;
      const hasTeamAWon = value.teamA.score > value.teamB.score;
      const points = isDraw
        ? { A: 1, B: 1 }
        : {
            A: hasTeamAWon ? 3 : 0,
            B: hasTeamAWon ? 0 : 3,
          };

      let cur = {
        A: {
          team: value.teamA.name,
          points: points.A,
          played: 1,
          draw: isDraw ? 1 : 0,
          won: !isDraw && hasTeamAWon ? 1 : 0,
          lost: !isDraw && !hasTeamAWon ? 1 : 0,
        },
        B: {
          team: value.teamB.name,
          points: points.B,
          played: 1,
          draw: isDraw ? 1 : 0,
          won: !isDraw && !hasTeamAWon ? 1 : 0,
          lost: !isDraw && hasTeamAWon ? 1 : 0,
        },
      };

      result[value.teamA.name] = resultA
        ? {
            ...resultA,
            points: cur.A.points + resultA.points,
            played: cur.B.played + resultA.played,
            draw: cur.B.draw + resultA.played,
            won: cur.B.won + resultA.won,
            lost: cur.B.lost + resultA.lost,
          }
        : cur.A;

      result[value.teamB.name] = resultB
        ? {
            ...resultB,
            points: cur.B.points + resultB.points,
            played: cur.B.played + resultB.played,
            draw: cur.B.draw + resultB.played,
            won: cur.B.won + resultB.won,
            lost: cur.B.lost + resultB.lost,
          }
        : cur.B;

      return result;
    }, {} as { [key: string]: ResultTableData });

    return Object.keys(results).map((key) => {
      return results[key];
    });
  }
}
