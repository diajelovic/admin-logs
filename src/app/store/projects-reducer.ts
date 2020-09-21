import { Action } from './store.types';
import { Log } from 'store/logs-reducer';

export interface RawProject {
  id: string;
  name: string;
  logs?: Record<string, Log>;
}

export interface Project {
  id: string;
  name: string;
  logs: Log[];
}

export interface ProjectsState {
  projectsById: Record<string, Project>;
  projectsList: string[];
}

const defaultState: ProjectsState = { projectsById: {}, projectsList: [] };

const convertProject = (project: RawProject): Project => {
  return {
    ...project,
    logs: project.logs ? Object.values(project.logs) : [],
  };
};

const prepareProjects = (projects: Record<string, RawProject>): Record<string, Project> => {
  const result: Record<string, Project> = {};

  for (const projectKey in projects) {
    result[projectKey] = convertProject(projects[projectKey]);
  }

  return result;
};

export const projectsReducer = (
  state: ProjectsState = defaultState,
  action: Action
): ProjectsState => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        projectsById: prepareProjects(action.payload),
        projectsList: Object.keys(action.payload),
      };
    case 'ADD_PROJECT':
      return {
        projectsById: {
          ...state.projectsById,
          [action.payload.id]: action.payload,
        },
        projectsList: [...state.projectsList, action.payload.id],
      };
    case 'ADD_LOG':
      const currentProject = state.projectsById[action.payload.projectId];

      if (!currentProject) {
        return state;
      }

      return {
        ...state,
        projectsById: {
          ...state.projectsById,
          [action.payload.projectId]: {
            ...currentProject,
            logs: [...currentProject.logs, action.payload.log],
          },
        },
      };
    default:
      return state;
  }
};
