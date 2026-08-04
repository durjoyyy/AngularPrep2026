import { Component } from '@angular/core';
import { CounterStore } from '../core/store/counter';
import { UserStore } from '../core/store/user';

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
