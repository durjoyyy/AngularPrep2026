import { Component } from '@angular/core';
import { CounterStore } from '../../services/counter';
import { UserStore } from '../../services/user';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.scss',
})
export class CounterApp {
  constructor(public counterStore:CounterStore, public userStore:UserStore){
  }

}
