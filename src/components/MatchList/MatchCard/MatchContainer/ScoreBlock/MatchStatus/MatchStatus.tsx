import { Status } from '../../../../../../types/match';
import styles from './MatchStatus.module.css';

interface IMatchStatus {
  status: Status
}

const statusConfig: Record<Status, { text: string; className: string }> = {
  Scheduled: { text: "Match preparing", className: styles.scheduled },
  Ongoing: { text: "Live", className: styles.ongoing },
  Finished: { text: "Finished", className: styles.finished },
};

export const MatchStatus = ( {status}: IMatchStatus ) => {
  const {text, className} = statusConfig[status];
 
  return (
    <div className={`${styles.matchStatus} ${className}`}>
      {text}
    </div>
  );
};
