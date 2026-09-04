import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.scss',
})
export class Effects {
  constructor() {
    effect(() => {
      //console.log('Count value is: ', this.count());

      // if (this.darkMode()) {
      //   document.body.style.background = 'black';
      //   document.body.style.color = 'white';
      // } else {
      //   document.body.style.background = 'white';
      //   document.body.style.color = 'black';
      // }
      if (this.message()) {
        setTimeout(() => {
          this.message.set('');
        }, 2500);
      }
    });
  }

  count = signal<number>(0);
  darkMode = signal<boolean>(false);
  message = signal<string>('');

  increment() {
    this.count.update((c) => c + 1);
  }

  toggleTheme() {
    this.darkMode.update((mode) => !mode);
  }

  showMessage(){
    this.message.set("Temporary Message");
  }
}
