import React, { Reducer } from 'react';
import { Action, Store } from './store.types';
import { authReducer } from './auth-reducer';
import { projectsReducer } from './projects-reducer';
import { combineReducers } from './helpers';
import { logsReducer } from './logs-reducer';

export const rootReducer: Reducer<Store, Action> = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  logs: logsReducer,
});

export const storeContext = React.createContext([]);
