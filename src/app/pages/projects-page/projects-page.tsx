// global
import React from 'react';
import 'firebase/auth';
import { Authorized } from 'hocs/authorized';

// common
// import { ProjectLogs } from './components/project-logs';
import { ProjectsList } from './components/projects-list/projects-list';

// local
import styles from './projects.styles.module.css';

export const ProjectsPage = Authorized(() => {
  return (
    <>
      <div className={styles.projects}>
        <ProjectsList />
      </div>
      <div className={styles.logs}>{/*<ProjectLogs />*/}</div>
    </>
  );
});
