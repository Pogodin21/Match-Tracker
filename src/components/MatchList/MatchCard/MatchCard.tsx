import styles from './MatchCard.module.css'
import { IMatch } from '../../../types/match';
import {MatchContainer} from './MatchContainer/MatchContainer';

interface IMactchCard {
  data: IMatch
};

export const MatchCard = ( {data}: IMactchCard ) => {
  return (
    <li className={styles.matchCard}>
      <MatchContainer data={data}/>
    </li>
  );
};
