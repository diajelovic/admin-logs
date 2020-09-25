import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import * as styles from './button.styles.module.css';

type Props = React.PropsWithChildren<{
  to: string;
  className?: string;
  wide?: boolean;
  color?: 'primary';
}>;

export const LinkButton = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  return (
    <Link
      ref={ref}
      to={props.to}
      className={cn(
        props.className,
        styles.button,
        props.color && styles[props.color],
        props.wide && styles.wide
      )}
    >
      {props.children}
    </Link>
  );
});
