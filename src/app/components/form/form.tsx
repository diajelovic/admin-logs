import React from 'react';

import * as styles from './form.styles.module.css';

type Props = React.PropsWithChildren<{
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  buttons?: React.ReactElement;
}>;

export const Form = (props: Props) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <h1>{props.title}</h1>
      {props.children}
      {props.buttons && <div className={styles.buttonsWrapper}>{props.buttons}</div>}
    </form>
  );
};
