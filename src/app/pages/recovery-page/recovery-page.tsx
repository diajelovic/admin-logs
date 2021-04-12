import * as React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import { NotAuthorized } from 'hocs/not-authorized';
import { Form } from 'components/form';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Messages } from 'components/messages';

export const RecoveryPage = NotAuthorized(() => {
  const [errors, setErrors] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const loginRef = React.useRef<HTMLInputElement>(null);
  const sendMail = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const email = loginRef.current.value;

    setMessages([]);
    setErrors([]);

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setMessages(['email was send']);
      })
      .catch((error) => {
        setErrors([error.message]);
      });
  }, []);

  const buttons = (
    <Button type="submit" color="primary">
      Recovery
    </Button>
  );

  return (
    <Form title="Register" buttons={buttons} onSubmit={sendMail}>
      <Messages errors={errors} messages={messages} />
      <Input ref={loginRef} type="email" autoComplete="username" placeholder="username or email" />
      <Link to="/sign-in">SignIn</Link>
    </Form>
  );
});
