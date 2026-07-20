import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.scss',
})
export class IfElse {
  isLoggedIn=false;

  showBox=true;

  toggleBox(){
    this.showBox=!this.showBox;
  }

  status:string='shipped';

  company:string='Benz';

  skills=['Angular','React','Springboot','Javascript']







}
