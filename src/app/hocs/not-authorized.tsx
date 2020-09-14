import React from 'react';
import * as R from 'ramda';
import { useSelector } from 'store';
import { Redirect } from 'react-router';
import { LoadingProfile } from './loading-profile';
import { HOC } from './hoc.types';

function NotAuthorizedFn<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  return (props: P) => {
    const isLoggedIn = useSelector((store) => !!store.auth.profile);

    return !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  };
}

export const NotAuthorized = R.compose(NotAuthorizedFn, LoadingProfile) as HOC;
