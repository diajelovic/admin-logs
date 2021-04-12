import React from 'react';
import cn from 'classnames';

import styles from './form.styles.module.css';

type Props = React.PropsWithChildren<{
  title?: string;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
  buttons?: React.ReactElement;
}>;

export const Form = (props: Props) => {
  return (
    <form className={cn(styles.form, props.className)} onSubmit={props.onSubmit}>
      <h1>{props.title}</h1>
      {props.children}
      {props.buttons && <div className={styles.buttonsWrapper}>{props.buttons}</div>}
    </form>
  );
};
