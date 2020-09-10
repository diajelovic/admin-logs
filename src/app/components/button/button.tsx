import React from 'react';
import cn from 'classnames';

import * as styles from './button.styles.module.css';

type Props = React.PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary';
}>;

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button
      ref={ref}
      className={cn(styles.button, props.color && styles[props.color])}
      type={props.type}
    >
      {props.children}
    </button>
  );
});
