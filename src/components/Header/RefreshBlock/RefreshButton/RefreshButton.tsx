import styles from './RefreshButton.module.css';
import Refresh from '../../../../../public/Refresh.svg' 
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';  
import { fetchMatches } from '../../../../store/matchSlice';

export const RefreshButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.matches.loading);

  const handleRefresh = () => {
    if (!isLoading) {
      dispatch(fetchMatches());
    }
  };  

  return (
    <button 
     className={styles.refreshButton}
     onClick={handleRefresh}
     disabled={isLoading}
    >
        <span>Обновить</span>
        <img 
          src={Refresh} 
          className={`${styles.icon} ${isLoading ? styles.spin : ''}`} 
          alt="Обновление" 
        />
    </button>
  );
};
