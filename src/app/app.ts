import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from '../login-page/login-page';
import { SignInComponent } from "./signIn/signIn";
import { Events } from "../events/events";
import { EventTypes } from "./event-types/event-types";
import { Counter } from "./counter/counter";
import { GetSet } from "./get-set/get-set";
import { StyleRealted } from "./style-realted/style-realted";
import { IfElse } from './if-else/if-else';

@Component({
  selector: 'app-root',
  imports: [IfElse],
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

  handleClick(){
    console.log("Clicked Button");
    this.helloWorld();
  }

  helloWorld(){
    console.log("Hello World");
  }

  val=10;
  //val=20; duplicate identifier


  handleTypes(){
    let val1;
    val1=10;
    // let val=20; error
    val1="Durjoy";
    return val1;
  }

  firstName:string|null="Durjoy";
  myAge:number=10;
  isSmoker:boolean=true;
  favThings:any=["Neha","Color Red","Argentina"];
  favFood:unknown="Mishti Doi";

  sum(a:any,b:number){
    return a+b;
  }


}
