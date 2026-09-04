import { Component, input, EventEmitter, Output, output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {

  //new way to get input in child
  nameNew=input<string>();


  //old way: send from child to parent
  @Output() oldMessage = new EventEmitter<string>();
  sendToParentOld(){
    this.oldMessage.emit("Hello Parent, old way");
  }


  //new way: send from child to parent
  newMessage = output<string>();
  sendToParentNew(){
    this.newMessage.emit("Hello Parent, new way");
  }



}
