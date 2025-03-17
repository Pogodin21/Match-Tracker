import {ErrorMessage} from "./ErrorMessage/ErrorMessage";
import {RefreshButton} from "./RefreshButton/RefreshButton";
import styles from './Refreshblock.module.css';

export const RefreshBlock = () => {
  return (
    <div className={styles.refrashBlock}>
      <ErrorMessage />
      <RefreshButton />
    </div>
  )
};
