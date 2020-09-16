import { Action } from './store.types';

export interface Project {
  id: string;
  name: string;
  logs: string[];
}

export interface ProjectsState {
  projectsById: Record<string, Project>;
  projectsList: string[];
  currentProject: string | null;
}

const defaultState: ProjectsState = { projectsById: {}, projectsList: [], currentProject: null };

export const projectsReducer = (
  state: ProjectsState = defaultState,
  action: Action
): ProjectsState => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projectsById: action.payload,
        projectsList: Object.keys(action.payload),
      };
    default:
      return state;
  }
};
