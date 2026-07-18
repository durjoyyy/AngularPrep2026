import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  count = 0;
  age = signal(26);

  increment() {
    this.count++;
  }

  incrementSignal() {
    this.age.update((a) => a + 1);
  }

  showEvent(e: any) {
    console.log(e);
  }

  username = '';
  updateUserName(value: string) {
    this.username = value;
  }


  handleSubmit(e:any){
    e.preventDefault();
    console.log("Form Submitted");
  }


}
