import teamLogo from '../../../../../../public/illustrations_role.png';
import styles from './TeamBlock.module.css'

export const HomeTeam = ( {team} ) => {
  return (
    <div className={styles.teamBlock}>
      <span>{team.name}</span>
      <img src={teamLogo} alt={team.name} />
    </div>
  );
};
