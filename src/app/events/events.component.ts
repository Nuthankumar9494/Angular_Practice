import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayVal:string="";
  getvalue(val:string){
    console.warn(val);
    this.displayVal=val;
  }
  count=0;
  counter(){
    this.count++;
  }

}
