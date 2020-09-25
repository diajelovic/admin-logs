import { Action, Project } from './store.types';

export interface Log {
  id: string;
  name: string;
  timestamp: number;
}

export interface LogMessage {
  id: string;
  message: string;
  type: 'info' | 'debug' | 'warning' | 'error';
  timestamp: number;
}

export interface LogsState {
  logsById: Record<string, Log>;
  messagesByLogId: Record<string, LogMessage[]>;
}

const defaultState: LogsState = { logsById: {}, messagesByLogId: {} };

export const logsReducer = (state: LogsState = defaultState, action: Action): LogsState => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      const projects: Project[] = action.payload;
      const allLogs: Record<string, Log> = {};

      for (const projectKey in projects) {
        const project: Project = projects[projectKey];
        const logs = project.logs;

        for (const logKey in logs) {
          allLogs[logKey] = logs[logKey];
        }
      }

      return {
        ...state,
        logsById: allLogs,
      };
    case 'ADD_LOG':
      return {
        ...state,
        logsById: {
          ...state.logsById,
          [action.payload.log.id]: action.payload.log,
        },
      };
    case 'FETCH_MESSAGES':
      return {
        ...state,
        messagesByLogId: {
          ...state.messagesByLogId,
          [action.payload.logId]: Object.values(action.payload.messages),
        },
      };
    case 'ADD_MESSAGE':
      const currentLog = state.messagesByLogId[action.payload.logId];

      if (!currentLog) {
        return state;
      }

      return {
        ...state,
        messagesByLogId: {
          ...state.messagesByLogId,
          [action.payload.logId]: [...currentLog, action.payload.message],
        },
      };
    default:
      return state;
  }
};
