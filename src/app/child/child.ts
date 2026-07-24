import { Component, input,EventEmitter,Output, signal } from '@angular/core';

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
  @Output() notify = new EventEmitter<string>();
  sendToParent(){
    this.notify.emit("Hello Parent, old way")
  }


  //new way: send from child to parent
  message=signal("Hello Parent, New Way");
  updateMessage(){
    this.message.set("Updated from child to parent");
  }



}
