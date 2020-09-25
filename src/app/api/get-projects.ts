import * as firebase from 'firebase/app';
import { ErrorResult } from './api.types';
import { Project } from '../store';

type Result = ErrorResult | Project[];

export const getProjects = async (): Promise<Result> => {
  return firebase
    .database()
    .ref('/projects')
    .once('value')
    .then((snap) => {
      return snap.val();
    });
};
