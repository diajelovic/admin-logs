import React from 'react';
import { useSelector } from 'store';
import { Redirect } from 'react-router';
import * as R from 'ramda';

import { LoadingProfile } from './loading-profile';
import { HOC } from './hoc.types';

function AuthorizedFn<P>(Component: React.ComponentType<P>) {
  return (props: P) => {
    const isLoggedIn = useSelector((store) => !!store.auth.profile);

    return isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />;
  };
}

export const Authorized = R.compose(AuthorizedFn, LoadingProfile) as HOC;
