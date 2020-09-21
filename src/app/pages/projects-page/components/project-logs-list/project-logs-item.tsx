import React from 'react';

import { Log } from 'store/logs-reducer';

import * as styles from './project-logs-list.styles.module.css';

interface Props {
  log: Log;
}

export const LogItem: React.FC<Props> = (props) => {
  return <div className={styles.item}>{props.log.name}</div>;
};
