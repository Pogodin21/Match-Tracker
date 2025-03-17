import {Logo} from "./Logo/Logo";
import {RefreshBlock} from "./RefreshBlock/RefreshBlock";
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <RefreshBlock />
    </div>
  )
};

 