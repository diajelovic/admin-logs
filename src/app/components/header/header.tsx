import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, Store } from 'store';
import * as styles from './styles.module.css';

export const Header = () => {
  const isLoggedIn = useSelector((store: Store) => !!store.auth.profile);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>AdminLogs</div>
      {isLoggedIn ? <button>SignOut</button> : <Link to="/sign-in">SignIn</Link>}
    </div>
  );
};
