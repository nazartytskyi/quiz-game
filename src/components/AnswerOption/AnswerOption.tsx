import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './AnswerOption.module.scss';

interface IAnswerOptionProps {
  children: ReactNode;
  onClick?: () => void;
  state?: 'correct' | 'wrong';
}

export function AnswerOption({ state, children, onClick }: IAnswerOptionProps) {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={onClick}
        className={classNames(styles.answer, {
          [styles.answerWrong]: state === 'wrong',
          [styles.answerCorrect]: state === 'correct',
        })}
      >
        <div
          className={classNames(styles.line, {
            [styles.wrong]: state === 'wrong',
            [styles.correct]: state === 'correct',
          })}
         />
        {children}
      </button>
    </div>
  );
}
