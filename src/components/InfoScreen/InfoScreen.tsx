import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './InfoScreen.module.scss';
import { Icon } from '../Icon';

interface IInfoScreenProps {
  fancyBg?: boolean;
  children: ReactNode;
}

export function InfoScreen({ fancyBg, children }: IInfoScreenProps) {
  return (
    <div
      className={classNames(styles.screen, {
        [styles.fancyBackground]: fancyBg,
      })}
    >
      <div className={styles.contentWrapper}>
        <Icon className={styles.thumbIcon} icon="Thumb" />
        <div>{children}</div>
      </div>
    </div>
  );
}
