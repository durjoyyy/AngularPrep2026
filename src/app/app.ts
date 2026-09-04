import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { SignInComponent } from "./components/signIn/signIn";
import { Events } from "./components/events/events";
import { EventTypes } from "./components/event-types/event-types";
import { Counter } from "./components/counter/counter";
import { GetSet } from "./components/get-set/get-set";
import { StyleRealted } from "./components/style-realted/style-realted";
import { IfElse } from './components/if-else/if-else';
import { Signals } from './components/signals/signals';
import { Effects } from "./components/effects/effects";
import { Pipes } from "./components/pipes/pipes";
import { SignalDeepDive } from "./components/signal-deep-dive/signal-deep-dive";
import { TwoWayBinding } from "./components/two-way-binding/two-way-binding";
import { ToDoApp } from "./components/to-do-app/to-do-app";
import { SignalsWithTemplateBinding } from "./components/signals-with-template-binding/signals-with-template-binding";
import { SignalInput } from "./components/signal-input/signal-input";
import { CounterStore } from './services/counter';
import { CounterApp } from "./components/counter-app/counter-app";
import { Forms } from "./components/forms/forms";
import { Cards } from "./components/cards/cards";
import { ButtonReusable } from "./components/button-reusable/button-reusable";
import { FormsReusable } from "./components/forms-reusable/forms-reusable";
import { FormField } from '@angular/forms/signals';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, Header, TwoWayBinding, SignalInput, Pipes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(public counterStore:CounterStore){

  }

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


  saveData(){
    console.log("Data Run");
  }

  message:string='';

  saveDataString(s:any){
    console.log(s);
    this.message=s;
  }


  emailForm='';
  onEmailChange(value:string){
    console.log('EMAIL: ', value);
    this.emailForm=value;
  }


}
