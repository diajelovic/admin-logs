import { Action } from 'overmind';
import firebase from 'firebase';
import { AuthState } from './auth.state';

export const signIn: Action<firebase.User> = ({ state }: { state: AuthState }, profile) => {
  state.profile = profile;
};

export const signOut: Action = ({ state }: { state: AuthState }) => {
  state.profile = null;
};
