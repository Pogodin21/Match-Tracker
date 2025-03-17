export interface IPlayer {
  username: string;
  kills: number;
}

export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[];
  points: number;
  total_kills: number;
}

export enum Status {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export interface IMatch {
  title: string;
  time: string; 
  status: Status; 
  homeScore: number;
  awayScore: number;
  homeTeam: ITeam;
  awayTeam: ITeam;
}

export interface IApiResponse {
  data: {
    matches: IMatch[];
  };
  ok: boolean;
}
