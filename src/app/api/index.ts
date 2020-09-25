import { ErrorResult } from './api.types';

export * from './create-log-message';
export * from './create-project-log';
export * from './create-project';
export * from './get-projects';
export * from './get-logs-messages';

export const isError = (result: any): result is ErrorResult => {
  return !!result.errors;
};
