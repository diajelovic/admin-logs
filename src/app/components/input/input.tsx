import React from 'react';

import * as styles from './input.styles.module.css';

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  autoComplete?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={styles.wrapper}>
      <input ref={ref} className={styles.input} type="text" {...props} />
    </div>
  );
});
