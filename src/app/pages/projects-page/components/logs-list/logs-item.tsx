import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import { Log } from 'store/logs-reducer';
import { LOG_PATTERN } from 'routes/routes';

import styles from './logs-list.styles.module.css';

interface Props {
  projectId: string;
  log: Log;
}

export const LogItem: React.FC<Props> = (props) => {
  return (
    <Link
      to={generatePath(LOG_PATTERN, {
        projectId: props.projectId,
        logId: props.log.id,
      })}
      className={styles.item}
    >
      {props.log.name}
    </Link>
  );
};
