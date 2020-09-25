import React from 'react';
import { useParams } from 'react-router';
import { ProjectRouteParams } from 'pages/projects-page/projects.types';

import { LogMessages } from '../log-messages';
import { LogsList } from '../logs-list';

export const ProjectLogs = () => {
  const { logId, projectId } = useParams<ProjectRouteParams>();

  return logId ? (
    <LogMessages projectId={projectId} logId={logId} />
  ) : projectId ? (
    <LogsList projectId={projectId} />
  ) : (
    <div> Project is Not selected</div>
  );
};
