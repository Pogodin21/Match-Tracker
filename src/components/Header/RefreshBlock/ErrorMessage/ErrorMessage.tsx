import styles from './ErrorMessage.module.css';
import  AlertTriangle from '../../../../../public/alert-triangle.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

export const ErrorMessage = () => {
  const isError = useSelector((state: RootState) => state.matches.error)

  if (isError) {
    return (  
      <div className={styles.errorMessage}>
        <img src={AlertTriangle} alt='Ошибка'/>
        <a>Ошибка: не удалось загрузить информацию</a>
      </div>
    );
  }
};
