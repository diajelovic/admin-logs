import React from 'react';
import cn from 'classnames';

import * as styles from './button.styles.module.css';

type Props = React.PropsWithChildren<{
  onClick?: (e?: React.MouseEvent) => void;
  wide?: boolean;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary';
}>;

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button
      ref={ref}
      onClick={props.onClick}
      className={cn(styles.button, props.color && styles[props.color], props.wide && styles.wide)}
      type={props.type}
    >
      {props.children}
    </button>
  );
});
