import React from 'react';
import cn from 'classnames';

import styles from './messages.styles.module.css';

type Props = {
  errors?: string[];
  messages?: string[];
};

export const Messages: React.FC<Props> = (props) => {
  const { errors = [], messages = [] } = props;

  return (
    <>
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
    </>
  );
};
