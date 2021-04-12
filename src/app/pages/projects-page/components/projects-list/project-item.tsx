import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useSelector, Project } from 'store';

import { ProjectRouteParams } from 'pages/projects-page/projects.types';

import styles from './projects-list.styles.module.css';

interface Props {
  id: string;
}

export const ProjectItem = (props: Props) => {
  const project: Project = useSelector((state) => state.projects.projectsById[props.id]);
  const { projectId: currentProject } = useParams<ProjectRouteParams>();
  const isSelected = props.id === currentProject;

  return (
    <Link to={'/projects/' + props.id} className={cn(styles.project, isSelected && styles.active)}>
      {project.name}
    </Link>
  );
};
