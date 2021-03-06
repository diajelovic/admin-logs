// global
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// common
import { useSelector, Store, useDispatch } from 'store';
import { Button } from 'components/button';

// local
import styles from './header.styles.module.css';

export const Header = () => {
  const isMainPage = !!useRouteMatch({
    path: '/',
    exact: true,
    strict: true,
  });
  const isSignInPage = !!useRouteMatch('/sign-in');
  const profile = useSelector((store: Store) => store.auth.profile);
  const dispatch = useDispatch();

  const signOut = React.useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'signOut' });
      });
  }, []);

  return (
    <div className={styles.header}>
      {isMainPage ? (
        <div className={styles.logo}>AdminLogs</div>
      ) : (
        <Link to="/" className={styles.logo}>
          AdminLogs
        </Link>
      )}
      {profile ? (
        <>
          <div>Welcome, {profile.displayName || profile.email}</div>
          <Button onClick={signOut}>SignOut</Button>
        </>
      ) : (
        !isSignInPage && <Link to="/sign-in">SignIn</Link>
      )}
    </div>
  );
};
