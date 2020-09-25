import * as firebase from 'firebase/app';
import 'firebase/database';
import { Project } from 'store';
import { ErrorResult } from './api.types';

interface Params {
  name: string;
}

type Result = ErrorResult | Project;

export const createProject = async ({ name }: Params): Promise<Result> => {
  if (!name) {
    return {
      errors: ['project name is empty'],
    };
  } else {
    const newProjectKey = firebase.database().ref().child('projects').push().key;
    const newProject = {
      id: newProjectKey,
      name,
    };

    firebase
      .database()
      .ref('projects/' + newProjectKey)
      .set(newProject)
      .then(() => {
        return newProject;
      })
      .catch((e) => {
        console.log(e);

        return {
          errors: ['Database Error'],
        };
      });
  }
};
