import styles from './ScoreBlock.module.css'
import { IMatch } from '../../../../../types/match';
import {MatchScore} from './MatchScore/MatchScore';
import {MatchStatus} from './MatchStatus/MatchStatus';

interface IScoreBlock {
  data: IMatch
}

export const ScoreBlock = ( {data}: IScoreBlock ) => {
  const {homeScore, awayScore, status} = data;

  return (
    <div className={styles.scoreBlock}>
      <MatchScore awayScore={awayScore} homeScore={homeScore} />
      <MatchStatus status={status}/>
    </div>
  );
};
