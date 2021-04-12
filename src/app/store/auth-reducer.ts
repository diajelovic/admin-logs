import { Action } from './store.types';
import firebase from 'firebase/app';

export interface AuthState {
  profile?: firebase.User;
}

export const authReducer = (state: AuthState = {}, action: Action): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        profile: action.payload,
      };
    case 'signOut':
      return {
        profile: undefined,
      };
    default:
      return state;
  }
};
