import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

import { Form } from 'components/form';
import { Input } from 'components/input';
import { Button } from 'components/button';

export const AuthPage = () => {
  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const signIn = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const email = loginRef.current.value;
    const password = passwordRef.current.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.debug('---error', error);
      });
  }, []);

  const buttons = (
    <>
      <Link component={Button} to="/register">
        Register
      </Link>
      <Button type="submit" color="primary">
        SignIn
      </Button>
    </>
  );

  return (
    <Form title="Sign In" onSubmit={signIn} buttons={buttons}>
      <Input
        ref={loginRef}
        type="email"
        name="admin_logs_login"
        autoComplete="username"
        placeholder="username or email"
      />
      <Input
        ref={passwordRef}
        type="password"
        name="admin_logs_password"
        autoComplete="current-password"
        placeholder="password"
      />
      <Link to="/">Forget Password?</Link>
    </Form>
  );
};
