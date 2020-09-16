import { Reducer } from 'react';

export const combineReducers = (reducers: Record<string, Reducer<any, any>>): Reducer<any, any> => {
  return (state: Record<string, any>, action) => {
    let hasChange = false;
    const newState = { ...state };

    for (const key in reducers) {
      const reducerResult = reducers[key](state[key], action);

      if (reducerResult !== state[key]) {
        newState[key] = reducerResult;
        hasChange = true;
      }
    }

    console.debug('---newState', hasChange, newState);

    return hasChange ? newState : state;
  };
};
