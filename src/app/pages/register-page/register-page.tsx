import * as React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import { NotAuthorized } from 'hocs/not-authorized';
import { Form } from 'components/form';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Messages } from 'components/messages';

export const RegisterPage = NotAuthorized(() => {
  const [errors, setErrors] = React.useState([]);
  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const register = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const email = loginRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = passwordRef.current.value;
    setErrors([]);

    if (password !== confirmPassword) {
      setErrors(['password dont match']);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
              setErrors([error.message]);
            });
        });
    }
  }, []);

  const buttons = (
    <Button type="submit" color="primary">
      Register
    </Button>
  );

  return (
    <Form title="Register" buttons={buttons} onSubmit={register}>
      <Messages errors={errors} />
      <Input ref={loginRef} type="email" autoComplete="username" placeholder="username or email" />
      <Input ref={passwordRef} type="password" autoComplete="new-password" placeholder="password" />
      <Input
        ref={confirmPasswordRef}
        type="password"
        autoComplete="new-password"
        placeholder="confirm password"
      />
      <Link to="/sign-in">SignIn</Link>
    </Form>
  );
});
