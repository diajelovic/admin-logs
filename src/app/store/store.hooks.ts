import React from 'react';
import { storeContext } from './store.context';
import { Store } from './store.types';

type Selector = (store: Store) => any;

export const useSelector = (selector: Selector) => {
  const [store] = React.useContext(storeContext);

  return selector(store);
};

export const useDispatch = () => {
  const [_, dispatch] = React.useContext(storeContext);

  return dispatch;
};
