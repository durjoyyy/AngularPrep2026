import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

  counter:number=0;
  counterS=signal<number>(0);

  handlePlus(){
    this.counterS.update(s=>s+1);
  }

    handleMinus(){
    this.counterS.update(s=>s-1);
  }

    handleReset(){
    this.counterS.set(0);
  }


}
