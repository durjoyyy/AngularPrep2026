import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})


export class Pipes {
  lowerName='durjoy';
  upperName='DURJOY'

  today=new Date();

  amount=1000;

  per=0.25;

  user={
    name:"D",
    age:26
  }
}
