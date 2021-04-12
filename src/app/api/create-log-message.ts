// global
import firebase from 'firebase/app';
import 'firebase/database';

// common
import { LogMessage } from 'store/logs-reducer';

// local
import { ErrorResult } from './api.types';

interface Params {
  message: string;
  logId: string;
}

type Result = ErrorResult | LogMessage;

export const createLogMessage = async ({ message, logId }: Params): Promise<Result> => {
  if (!message) {
    return {
      errors: ['message is empty'],
    };
  } else {
    const newMessageKey = firebase.database().ref(`messages`).push().key;
    const newMessage: LogMessage = {
      id: newMessageKey,
      message,
      type: 'info',
      timestamp: Date.now(),
    };

    const updates: Record<string, any> = {
      [`messages/${logId}/${newMessageKey}`]: newMessage,
    };

    return await firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        return newMessage;
      })
      .catch((e) => {
        console.log(e);

        return {
          errors: ['Database Error'],
        };
      });
  }
};
