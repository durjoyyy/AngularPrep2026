import { Component, computed, signal, WritableSignal } from '@angular/core';
import { single } from 'rxjs';

interface SignalsState {
  cash: WritableSignal<number>;
  cashInHand: number;
}

interface Details{
  fullName:string,
  age:number
}

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals implements SignalsState {

  cash = signal(15000);
  ipoCash:WritableSignal<number>=signal(14900);
  cashInHand: number = 15000;
  total=0;
  players = signal(["Messi", "Ronaldo","Haaland"]);

  age=signal<number>(26);
  clubs=signal<string[]>(["FCB","Real Madrid","PSG","Arsenal","Bayern"]);


  //computed signal
  salary=signal<number>(75000);
  incrementedSalary20=computed<number>(()=>this.salary()+20/100*this.salary());
  incrementedSalary30=computed<number>(()=>this.salary()+30/100*this.salary());
  
  increaseSalary(){
    this.salary.update(s=>s+1000);
  }


  firstName=signal<string>('Neha');
  lastName=signal<string>('Das Ghosh');

  fullName=computed<string>(()=>`${this.firstName()} ${this.lastName()}`);



  price=signal<number[]>([159,12,651,256]);
  totalPrice=computed<number>(()=> this.price().reduce((acc,curr)=>acc+curr,0));



  //end of computed signal


  detailsWithObj=signal<{fullName:string,age:number}[]>([
    {
      fullName:'Durjoy Ghosh',
      age:26
    }]
  );

  details=signal<Details[]>([
    {
      fullName:'Durjoy Ghosh',
      age:26
    },
        {
      fullName:'Neha Das',
      age:26
    }
  ])

  updateCash(){
    this.cash.update(a=>a+1000);
    this.ipoCash.set(0);
    let total=computed(()=>this.cash()+this.ipoCash());
    console.log(this.cash()+this.ipoCash());
  }

  updatePlayers(){
    this.players.update(p=>[...p,"Mbappe"]);
  }

}
