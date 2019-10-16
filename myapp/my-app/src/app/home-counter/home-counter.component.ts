import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-counter',
  template:` <h1>Welcome To Count Game</h1>
  <div class='play-container'>   
      <button type="button" (click)="countClick()" >-</button> {{clickCount}}
      <button type="button" (click)="countClickP()">+</button>
  </div>
  
  <div class='play-container'>   
  <input type="text"[(ngModel)]="name">
  <strong> Count :</strong>{{name}}
  <strong>{{clickCount}}</strong>
  <br>
  
  </div>
  
`




})
export class HomeCounterComponent implements OnInit {
clickCount:number=0;


name:String='';
  constructor() { }

  ngOnInit() {
  }
  countClick(){
    this.clickCount-=1;
  }
  countClickP(){
    this.clickCount+=1;
  }

}
