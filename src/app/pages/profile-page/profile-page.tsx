import * as React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'store';

export const ProfilePage = () => {
  const [pending, setPending] = React.useState(true);
  const isLoggedIn = useSelector((state) => !!state.auth.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({ type: 'signIn', payload: user });
      }

      setPending(false);
    });
  }, []);

  return pending ? (
    <div>logged in</div>
  ) : isLoggedIn ? (
    <div>logged in</div>
  ) : (
    <Redirect to="/sign-in" />
  );
};
