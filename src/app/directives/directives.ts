import { Component } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'app-directives',
  imports: [Highlight],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {}
