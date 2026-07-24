import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-signal-input',
  imports: [Child],
  templateUrl: './signal-input.html',
  styleUrl: './signal-input.scss',
})
export class SignalInput {
  uname:string='Durjoy';
  message:string='';


  onMessage(msg:string){
    this.message=msg;
  }
  


}
