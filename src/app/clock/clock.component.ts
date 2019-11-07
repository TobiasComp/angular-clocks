import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent  {
  time:string;
  @Input () city:string;
  @Input () bg:string;

  constructor() { 
    setInterval(()=>this.setTime(),1000)
  }

  
  setTime(){
    var today = new Date();
    this.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }
  
}