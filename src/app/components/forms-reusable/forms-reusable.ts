import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-forms-reusable',
  imports: [],
  templateUrl: './forms-reusable.html',
  styleUrl: './forms-reusable.scss',
})
export class FormsReusable {
  label=input<string>();
  //value=input<string>();
  type=input<string>();
  valueChange=output<string>();

  onInput(value:string){
    console.log('Child value',value);
    this.valueChange.emit(value);
  }
  
}
