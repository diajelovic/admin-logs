import React from 'react';
import { useSelector } from 'store';
import { Loading } from 'components/loading';

export function LoadingProfile<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  return (props: P) => {
    const pending = useSelector((store) => store.auth.profile === undefined);

    return pending ? <Loading /> : <Component {...props} />;
  };
}
