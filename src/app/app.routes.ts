import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Dashboard } from './components/dashboard/dashboard';
import { Insights } from './components/dashboard/insights/insights';
import { Data } from './components/dashbord/data/data';
import { ErrorPage } from './components/error-page/error-page';
import { Login } from './components/login/login';
import { LoginPage } from './components/login-page/login-page';
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
  { path: 'admin', loadComponent: () => import('./components/admin/admin').then((m) => m.Admin) },
  { path: 'login', component: Login },
  {
    path: '**',
    component: ErrorPage,
  },
];
