import styles from './MatchList.module.css';
import { useEffect } from 'react';
import {MatchCard} from './MatchCard/MatchCard';
import { IMatch } from '../../types/match';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../../store/matchSlice';
import { AppDispatch, RootState } from '../../store/store';

export const MatchList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {matches} = useSelector((state: RootState) => state.matches)

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch])

  return (
    <ul className={styles.matchList}>
      {matches.map((match: IMatch) => (
        <MatchCard key={match.title} data={match} />
      ))}
    </ul>
  );
};
