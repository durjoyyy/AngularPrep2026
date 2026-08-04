import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

   loginNow(){
     this.auth.login();
     this.router.navigate(['/dashboard']) 
    }
}
