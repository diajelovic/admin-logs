import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import firebase from 'firebase/app';
import 'firebase/auth';

import { useDispatch } from 'store';
import { Header } from 'components/header';

import styles from './layout.styles.module.css';

interface Props {
  route?: RouteConfig;
}

export const Layout = ({ route }: Props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(function (user) {
      dispatch({ type: 'signIn', payload: user ? user : null });
    });
  }, []);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>{renderRoutes(route.routes)}</div>
    </div>
  );
};
