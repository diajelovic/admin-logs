import React from 'react';

import * as styles from './button.styles.module.css';

type Props = React.PropsWithChildren<{}>;

export const ButtonsHolder = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <div className={styles.holder}>{props.children}</div>;
});
