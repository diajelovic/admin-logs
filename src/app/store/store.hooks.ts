import React from 'react';
import { storeContext } from './store.context';
import { Store } from './store.types';

type Selector<T> = (store: Store) => T;

export const useSelector = <T>(selector: Selector<T>): T => {
  const [store] = React.useContext(storeContext);

  return selector(store);
};

export const useDispatch = () => {
  const [_, dispatch] = React.useContext(storeContext);

  return dispatch;
};
