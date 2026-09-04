import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-deep-dive',
  imports: [],
  templateUrl: './signal-deep-dive.html',
  styleUrl: './signal-deep-dive.scss',
})
export class SignalDeepDive {
  count=signal(10);
  name=signal("Angular");

  setCount(){
    this.count.set(0);
  }

}
