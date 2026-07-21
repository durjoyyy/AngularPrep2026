import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeShortNamePipe } from '../pipe/pipe-short-name-pipe';
import { ConvertPipe } from '../pipe/convert-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,PipeShortNamePipe,ConvertPipe],
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

  fullName="Durjoy Ghosh";
  usd=10;
  usdToInr=96.34;


}
