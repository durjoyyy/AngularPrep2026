import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Insights } from './dashboard/insights/insights';
import { Data } from './dashbord/data/data';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'insights', component: Insights },
      { path: 'data', component: Data },
    ],
  },
];
