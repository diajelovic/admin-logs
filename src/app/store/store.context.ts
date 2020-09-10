import React from 'react';
import { Action, Store } from './store.types';
import { authReducer } from './auth-reducer';

export const rootReducer = (state: Store, action: Action) => ({
  auth: authReducer(state.auth, action),
});

export const storeContext = React.createContext([]);
