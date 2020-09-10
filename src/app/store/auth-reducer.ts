import { Action } from './store.types';
import * as firebase from 'firebase';

export interface AuthState {
  profile: firebase.User;
}

const defaultState: AuthState = {
  profile: null,
};

export const authReducer = (state: AuthState = defaultState, action: Action): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        profile: action.payload,
      };
    case 'signOut':
      return defaultState;
    default:
      return state;
  }
};
