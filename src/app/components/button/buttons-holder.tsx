import React from 'react';

// local
import styles from './button.styles.module.css';

type Props = React.PropsWithChildren<{}>;

export const ButtonsHolder = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <div className={styles.holder}>{props.children}</div>;
});
