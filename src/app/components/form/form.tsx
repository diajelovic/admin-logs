import React from 'react';
import cn from 'classnames';

import * as styles from './form.styles.module.css';

type Props = React.PropsWithChildren<{
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  buttons?: React.ReactElement;
  errors?: string[];
  messages?: string[];
}>;

export const Form = (props: Props) => {
  const { errors = [], messages = [] } = props;

  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <h1>{props.title}</h1>
      {!!messages.length && (
        <ul className={styles.messagesWrapper}>
          {messages.map((message, index) => {
            return <li key={index}>{message}</li>;
          })}
        </ul>
      )}
      {!!errors.length && (
        <ul className={cn(styles.messagesWrapper, styles.errors)}>
          {errors.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
      )}
      {props.children}
      {props.buttons && <div className={styles.buttonsWrapper}>{props.buttons}</div>}
    </form>
  );
};
