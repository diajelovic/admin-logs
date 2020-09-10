import { Action } from './store.types';

export interface AuthState {
  profile: any;
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
