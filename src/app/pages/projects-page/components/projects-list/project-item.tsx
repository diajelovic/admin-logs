import React from 'react';
import { useSelector, Project } from 'store';

interface Props {
  id: string;
}

export const ProjectItem = (props: Props) => {
  const project: Project = useSelector((state) => state.projects.projectsById[props.id]);

  console.debug('---project', project);

  return <div>{project.name}</div>;
};
