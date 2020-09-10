import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

export const AuthPage = () => {
  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const login = React.useCallback((e: React.FormEvent) => {
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

  return (
    <form onSubmit={login}>
      <input
        ref={loginRef}
        type="email"
        name="admin_logs_login"
        autoComplete="username"
        placeholder="username or email"
      />
      <input
        ref={passwordRef}
        type="password"
        name="admin_logs_password"
        autoComplete="current-password"
        placeholder="password"
      />
      <button type="submit">SignIn</button>
      <Link to="/register">Register</Link>
    </form>
  );
};
