import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: IButtonProps) {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      {children}
    </button>
  );
}
