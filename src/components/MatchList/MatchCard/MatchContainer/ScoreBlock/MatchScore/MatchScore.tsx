import styles from './MatchScore.module.css';

interface IMatchScore {
  awayScore: number
  homeScore: number
}

export  const MatchScore = ( {awayScore, homeScore}: IMatchScore) => {
  return (
    <div className={styles.matchScore}>{`${awayScore}:${homeScore}`}</div>
  );
};
