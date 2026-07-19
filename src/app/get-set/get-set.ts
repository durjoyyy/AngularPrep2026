import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.scss',
})
export class GetSet {
  name:string='';
  favTeam:string='';
  favPlayer:string='';

  updateName(val:string){
    this.name=val;
  }

  getFavPlayer(val:string){
    this.favPlayer=val;
  }
}
