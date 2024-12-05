import classNames from 'classnames';
import { ICON_TYPES } from './constants';
import styles from './Icon.module.scss';

interface IIconProps {
  icon: keyof typeof ICON_TYPES;
  className?: string;
}

export function Icon({ icon, className }: IIconProps) {
  const IconComponent = ICON_TYPES[icon];

  return (
    <div className={classNames(styles.icon, className)}>
      <IconComponent />
    </div>
  );
}
