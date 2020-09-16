import React, { Reducer } from 'react';
import { Action, Store } from './store.types';
import { authReducer } from './auth-reducer';
import { projectsReducer } from './projects-reducer';
import { combineReducers } from './helpers';

export const rootReducer: Reducer<Store, Action> = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
});

export const storeContext = React.createContext([]);
