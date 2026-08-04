import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Insights } from './dashboard/insights/insights';
import { Data } from './dashbord/data/data';
import { ErrorPage } from './error-page/error-page';
import { Login } from './login/login';
import { LoginPage } from '../login-page/login-page';
import { authGuard } from './auth-guard';
import { canDeactivateGuard } from './can-deactivate-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
    canDeactivate:[canDeactivateGuard]
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
    children: [
      { path: 'insights', component: Insights },
      { path: 'data', component: Data },
    ],
  },
  { path: 'admin', loadComponent: () => import('./admin/admin').then((m) => m.Admin) },
  { path: 'login', component: Login },
  {
    path: '**',
    component: ErrorPage,
  },
];
