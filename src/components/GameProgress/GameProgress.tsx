import classNames from 'classnames';
import { Prize } from '../Prize';
import styles from './GameProgress.module.scss';

interface IPrize {
  amount: number;
  questionId: number;
}

interface IGameProgressProps {
  prizes: IPrize[];
  currentQuestionId: number;
}

export function GameProgress({ currentQuestionId, prizes }: IGameProgressProps) {
  const prizesList = prizes.map((prize) => {
    let state: 'future' | 'past' | 'active' = 'future';

    if (prize.questionId === currentQuestionId) {
      state = 'active';
    } else if (
      prizes.findIndex((p) => p.questionId === prize.questionId) <
      prizes.findIndex((p) => p.questionId === currentQuestionId)
    ) {
      state = 'past';
    }

    return (
      <div key={prize.questionId} className={styles.prizeWrapper}>
        <Prize state={state}>
          <div className={styles.prizeText}>{prize.amount}</div>
        </Prize>
      </div>
    );
  });

  return <div className={classNames(styles.content)}>{prizesList}</div>;
}
