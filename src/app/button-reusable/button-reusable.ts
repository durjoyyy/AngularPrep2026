import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-reusable',
  imports: [],
  templateUrl: './button-reusable.html',
  styleUrl: './button-reusable.scss',
})
export class ButtonReusable {
  label1 = input<string>();
  label2 = input<string>();
  clicked1 = output<void>();
  clicked2 = output<string>();

  clickBtn(){
    this.clicked2.emit('Clicked Successfully');
  }
}
