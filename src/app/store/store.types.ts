import { AuthState } from './auth-reducer';

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  auth: AuthState;
}
