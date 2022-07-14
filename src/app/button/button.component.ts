import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
message:any;
  constructor() { }
  @Output () tapbutton= new EventEmitter<string>();

  ngOnInit(): void {
  }
  fireEvent(){
    this.tapbutton.emit("clicked by primary")
  }
  fireEvent2(){
    this.tapbutton.emit("clicked by primary1")
  }
}
