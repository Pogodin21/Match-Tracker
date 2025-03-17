import teamLogo from '../../../../../../public/illustrations_role.png';
import { ITeam } from '../../../../../types/match';
import styles from './TeamBlock.module.css';

interface IHomeTeam {
  team: ITeam
}

export const HomeTeam = ( {team}: IHomeTeam ) => {
  return (
    <div className={styles.teamBlock}>
      <span>{team.name}</span>
      <img src={teamLogo} alt={team.name} />
    </div>
  );
};
