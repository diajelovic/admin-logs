import React from 'react';

// common
import { Loading } from 'components/loading';
import { useOvermind } from 'store';

export function LoadingProfile<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  return (props: P) => {
    const { state } = useOvermind();

    return state.auth.pending ? <Loading /> : <Component {...props} />;
  };
}
