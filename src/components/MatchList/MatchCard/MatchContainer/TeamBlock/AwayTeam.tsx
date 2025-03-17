import teamLogo from '../../../../../../public/illustrations_role.png';
import { ITeam } from '../../../../../types/match';
import styles from './TeamBlock.module.css'

interface IAwayTeam {
  team: ITeam
}

export const AwayTeam = ( {team}: IAwayTeam ) => {
  return (
    <div className={styles.teamBlock}>
      <img src={teamLogo} alt={team.name} />
      <span>{team.name}</span>
    </div>
  );
};
