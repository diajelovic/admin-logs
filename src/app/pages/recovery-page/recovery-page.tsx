import * as React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { NotAuthorized } from 'hocs/not-authorized';
import { Form } from 'components/form';
import { Button } from 'components/button';
import { Input } from 'components/input';

const errors: string[] = [];

export const RecoveryPage = NotAuthorized(() => {
  const loginRef = React.useRef<HTMLInputElement>(null);
  const sendMail = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const email = loginRef.current.value;
  }, []);

  const buttons = (
    <Button type="submit" color="primary">
      Recovery
    </Button>
  );

  return (
    <Form title="Register" buttons={buttons} onSubmit={sendMail} errors={errors}>
      <Input ref={loginRef} type="email" autoComplete="username" placeholder="username or email" />
      <Link to="/sign-in">SignIn</Link>
    </Form>
  );
});
