export interface MatchPayload {
  teamA: MatchTeam;
  teamB: MatchTeam;
  date: string;
}

export interface Match extends MatchPayload {
  id: string;
}

export interface MatchTeam {
  name: string;
  score: number;
}

export interface ResultTableData {
  team: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
}
