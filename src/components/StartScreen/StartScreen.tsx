import styles from './StartScreen.module.scss';
import { InfoScreen } from '../InfoScreen';
import { Button } from '../Button';

interface IStartScreenProps {
  onStartClick?: () => void;
}

export function StartScreen({ onStartClick }: IStartScreenProps) {
  return <InfoScreen fancyBg>
    <div className={styles.content}>
      <h1>Who wants to be a millionaire?</h1>
      <Button onClick={onStartClick}>Start</Button>
    </div>
  </InfoScreen>
}
