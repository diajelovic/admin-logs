import * as firebase from 'firebase/app';

import { LogMessage } from 'store';

import { ErrorResult } from './api.types';

interface Params {
  logId: string;
}

type Result = ErrorResult | LogMessage[];

export const getLogMessages = async ({ logId }: Params): Promise<Result> => {
  return firebase
    .database()
    .ref(`/messages/${logId}`)
    .once('value')
    .then((snap) => {
      return snap.val();
    });
};
