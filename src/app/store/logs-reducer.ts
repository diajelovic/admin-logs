import { Action } from './store.types';

export interface Log {
  id: string;
  name: string;
}

export interface LogMessage {
  id: string;
  message: string;
  type: 'info' | 'debug' | 'warning' | 'error';
  timestamp: number;
}

export interface LogsState {
  messagesByLogId: Record<string, LogMessage>;
}

const defaultState: LogsState = { messagesByLogId: {} };

export const logsReducer = (state: LogsState = defaultState, action: Action): LogsState => {
  switch (action.type) {
    default:
      return state;
  }
};
