import styles from './MatchContainer.module.css'
import {ScoreBlock} from './ScoreBlock/ScoreBlock';
import {HomeTeam} from './TeamBlock/HomeTeam';
import {AwayTeam} from './TeamBlock/AwayTeam';
import { IMatch } from '../../../../types/match';

interface IMatchContainer {
  data: IMatch
};

export const MatchContainer = ({data}: IMatchContainer) => {
  return (
    <div className={styles.matchContainer}>
      <AwayTeam team={data.awayTeam}/>
      <ScoreBlock data={data}/>
      <HomeTeam team={data.homeTeam}/>
    </div>
  );
};
