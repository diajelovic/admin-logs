import * as React from 'react';
import 'firebase/auth';
import { Authorized } from 'hocs/authorized';

import { ProjectLogs } from './components/project-logs';
import { ProjectsList } from './components/projects-list/projects-list';

import * as styles from './projects.styles.module.css';

export const ProjectsPage = Authorized(() => {
  return (
    <>
      <div className={styles.projects}>
        <ProjectsList />
      </div>
      <div className={styles.logs}>
        <ProjectLogs />
      </div>
    </>
  );
});
