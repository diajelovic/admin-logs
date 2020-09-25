import * as firebase from 'firebase/app';
import 'firebase/database';

import { Log } from 'store';

import { ErrorResult } from './api.types';

interface Params {
  name: string;
  projectId: string;
}

type Result = ErrorResult | Log;

export const createProjectLog = async ({ name, projectId }: Params): Promise<Result> => {
  if (!name) {
    return {
      errors: ['logs name is empty'],
    };
  } else {
    const newLogsKey = firebase.database().ref(`projects/${projectId}/logs`).push().key;
    const newLog = {
      id: newLogsKey,
      name,
      timestamp: Date.now(),
    };

    const updates: Record<string, any> = {};
    updates[`projects/${projectId}/logs/${newLogsKey}`] = newLog;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        return newLog;
      })
      .catch((e) => {
        console.log(e);

        return {
          errors: ['Database Error'],
        };
      });
  }
};
