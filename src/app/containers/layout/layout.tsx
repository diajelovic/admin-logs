import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { useDispatch } from 'store';
import { Header } from 'components/header';

import './styles.css';

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
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};
