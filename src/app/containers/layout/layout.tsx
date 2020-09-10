import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Header } from 'components/header';

import './styles.css';

interface Props {
  route?: RouteConfig;
}

export const Layout = ({ route }: Props) => {
  return (
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};
