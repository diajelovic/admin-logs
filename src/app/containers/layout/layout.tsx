import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Header } from 'components/header';

import './styles.css';
import { useDispatch } from 'store';
import * as firebase from 'firebase';

interface Props {
  route?: RouteConfig;
}

export const Layout = ({ route }: Props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({ type: 'signIn', payload: user });
      }
    });
  }, []);

  return (
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};
