import { RouteConfig } from 'react-router-config';

import { Layout } from 'containers/layout';
// import { ProfilePage } from 'pages/profile-page';
import { AuthPage } from 'pages/auth-page';
// import { RegisterPage } from 'pages/register-page';
// import { RecoveryPage } from 'pages/recovery-page';
import { ProjectsPage } from 'pages/projects-page';

export const LOG_PATTERN = '/projects/:projectId?/:logId?';

export const routes: RouteConfig[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: ProjectsPage,
      },
      // {
      //   path: LOG_PATTERN,
      //   component: ProjectsPage,
      // },
      // {
      //   path: '/profile',
      //   component: ProfilePage,
      // },
      {
        path: '/sign-in',
        component: AuthPage,
      },
      // {
      //   path: '/register',
      //   component: RegisterPage,
      // },
      // {
      //   path: '/recovery',
      //   component: RecoveryPage,
      // },
    ],
  },
];
