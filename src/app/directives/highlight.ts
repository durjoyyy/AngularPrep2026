import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private element: ElementRef){
    element.nativeElement.style.color='red';
  }
}
