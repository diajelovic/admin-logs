import * as React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const register = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const email = loginRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = passwordRef.current.value;

    if (password !== confirmPassword) {
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.debug('---error', error);
      });
  }, []);

  return (
    <form onSubmit={register}>
      <input
        ref={loginRef}
        type="email"
        autoComplete="username"
        name="admin_logs_login"
        placeholder="username or email"
      />
      <input
        ref={passwordRef}
        type="password"
        autoComplete="new-password"
        name="admin_logs_password"
        placeholder="password"
      />
      <input
        ref={confirmPasswordRef}
        type="password"
        autoComplete="new-password"
        name="admin_logs_confirm_password"
        placeholder="confirm password"
      />
      <button type="submit">Register</button>
      <Link to="/sign-in">SignIn</Link>
    </form>
  );
};
