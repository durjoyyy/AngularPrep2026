import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { Auth } from './auth';


export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;

  router.navigate(['/login']);
  return false;
};
