import React from 'react';
import * as R from 'ramda';
import { Redirect } from 'react-router';

//common
import { useOvermind } from 'store';

// local
import { LoadingProfile } from './loading-profile';
import { HOC } from './hoc.types';

function NotAuthorizedFn<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  return (props: P) => {
    const { state } = useOvermind();

    return !state.auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  };
}

export const NotAuthorized = R.compose(LoadingProfile, NotAuthorizedFn) as HOC;
