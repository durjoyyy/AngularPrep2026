import { Component } from '@angular/core';

@Component({
  selector: 'app-event-types',
  imports: [],
  templateUrl: './event-types.html',
  styleUrl: './event-types.scss',
})
export class EventTypes {
  handleClick() {
    console.log('Clicked');
    window.alert('Clicked');
  }

  onTyping(event: InputEvent) {
    console.log('Typed Event', event);
    console.log(event.data);
    console.log((event.target as HTMLInputElement).value);
  }

  onKeyUp(event: any) {
    console.log('Key up Event', event.key);
  }

  onHover() {
    console.log('Hovered');
  }

  onMouseLeave(){
    console.log("Mouse Left");  
  }

  onBlur(){
    console.log("Blur EVent");
  }

  onFocus(){
    console.log("Focus Event");
  }


}
