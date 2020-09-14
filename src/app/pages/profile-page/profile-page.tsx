import * as React from 'react';
import 'firebase/auth';
import { useSelector } from 'store';
import { Authorized } from 'hocs/authorized';

export const ProfilePage = Authorized(() => {
  const isLoggedIn = useSelector((state) => !!state.auth.profile);

  return isLoggedIn ? <div>logged in</div> : <div>not Logged In</div>;
});
