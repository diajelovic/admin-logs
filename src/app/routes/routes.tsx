import { RouteConfig } from 'react-router-config';

import { Layout } from 'containers/layout';
import { ProfilePage } from 'pages/profile-page';
import { AuthPage } from 'pages/auth-page';
import { RegisterPage } from 'pages/register-page';

export const routes: RouteConfig[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: ProfilePage,
      },
      {
        path: '/sign-in',
        component: AuthPage,
      },
      {
        path: '/register',
        component: RegisterPage,
      },
    ],
  },
];
