import styles from './GameOverScreen.module.scss';
import { InfoScreen } from '../InfoScreen';
import { Button } from '../Button';

interface IGameOverScreenProps {
  onRestartClick?: () => void;
  totalScore: string;
}

export function GameOverScreen({ onRestartClick, totalScore }: IGameOverScreenProps) {
  return <InfoScreen>
    <div className={styles.content}>
      <div>
        <h3>Total score:</h3>
        <h1>{totalScore}</h1>
      </div>
      <Button onClick={onRestartClick}>Try again</Button>
    </div>
  </InfoScreen>
}
