
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
message:any;
// hide=false;
show=true;
hide=false;

  @Input() button: any;
  constructor() { }
  @Output () tapbutton= new EventEmitter<string>();

  ngOnInit(): void {
  }
  fireEvent(){
    this.show=false;
    this.hide=true;
    
   
    this.tapbutton.emit("clicked by primary")
  }
  fireEvent2(){
    this.show=true;
    this.hide=false;
    
    this.tapbutton.emit("clicked by primary1")
  }
  // ng module
  name:any;
  display=0;
  getInputValue(item:any){
      console.log(item);
      this.display=item;
  }

 
  
}
