import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Prize.module.scss';

interface IPrizeProps {
  children: ReactNode;
  state?: 'active' | 'future' | 'past';
}

export function Prize({ state, children }: IPrizeProps) {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.answer, {
          [styles.active]: state === 'active',
          [styles.future]: state === 'future',
          [styles.past]: state === 'past',
        })}
      >
        <div
          className={classNames(styles.line, {
            [styles.active]: state === 'active',
            [styles.future]: state === 'future',
            [styles.past]: state === 'past',
          })}
        />
        {children}
      </div>
    </div>
  );
}
