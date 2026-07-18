import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from '../login-page/login-page';
import { SignInComponent } from "./signIn/signIn";
import { Events } from "../events/events";

@Component({
  selector: 'app-root',
  imports: [LoginPage, SignInComponent, Events],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Tutorial');
  name="Angular Tutorial";
  
  userName="Durjoy";

  age=26;

  email='xdurjoyx@gmail.com'

  isGoat=true;

  getUser(){
    return "This should not be used"
  }

  favTeam=signal("Argentina");

}
