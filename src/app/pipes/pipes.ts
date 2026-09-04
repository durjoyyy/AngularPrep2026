import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeShortNamePipe } from '../pipe/pipe-short-name-pipe';
import { ConvertPipe } from '../pipe/convert-pipe';
import { TestPipePipe } from '../pipe/test-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,PipeShortNamePipe,ConvertPipe,TestPipePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
  encapsulation:ViewEncapsulation.None
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
  name='My name is Durjoy Ghosh, I am from Siliguri'


}



// component created, input values set, ngonchanges, ngoninit, ngdocheck, view init, ngafterinit, 
//change detection, ngafterview chekced, comp destoyed, ngonDestroy
