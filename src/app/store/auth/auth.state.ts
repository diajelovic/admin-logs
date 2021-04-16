import firebase from 'firebase';
import { derived } from 'overmind';

export interface AuthState {
  profile?: firebase.User | null;
  isLoggedIn: boolean;
  pending: boolean;
}

export const state: AuthState = {
  profile: undefined,
  isLoggedIn: derived((state: AuthState) => {
    console.debug('---state', state);
    return !!state.profile;
  }),
  pending: derived((state: AuthState) => state.profile === undefined),
};
