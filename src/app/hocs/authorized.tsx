// global
import React from 'react';
import { Redirect } from 'react-router';
import * as R from 'ramda';

// common
import { useOvermind } from 'store';

// local
import { LoadingProfile } from './loading-profile';
import { HOC } from './hoc.types';

function AuthorizedFn<P>(Component: React.ComponentType<P>) {
  return (props: P) => {
    const { state } = useOvermind();

    return state.auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />;
  };
}

export const Authorized = R.compose(LoadingProfile, AuthorizedFn) as HOC;
