import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
  children?: ReactNode;
}

export function Sidebar({ children }: ISidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(!open)} className={classNames(styles.button)}>
        {open ? <Icon icon="Close" /> : <Icon icon="Burger" />}
      </button>
      <aside className={classNames(styles.aside, { [styles.open]: open })}>
        <div className={styles.content}>{children}</div>
      </aside>
    </>
  );
}
