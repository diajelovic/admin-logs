import React from 'react';
import { useParams } from 'react-router';
import { ProjectRouteParams } from 'pages/projects-page/projects.types';

import { LogMessages } from '../log-messages';
import { ProjectLogsList } from '../project-logs-list';

export const ProjectLogs = () => {
  const { logsId, projectId } = useParams<ProjectRouteParams>();

  return logsId ? (
    <LogMessages logsId={logsId} />
  ) : projectId ? (
    <ProjectLogsList projectId={projectId} />
  ) : (
    <div> Project is Not selected</div>
  );
};