import { AuthState } from './auth-reducer';
import { ProjectsState } from './projects-reducer';
import { LogsState } from './logs-reducer';

export * from './projects-reducer';

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  auth: AuthState;
  projects: ProjectsState;
  logs: LogsState;
}
