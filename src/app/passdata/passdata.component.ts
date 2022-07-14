import { Component, EventEmitter, OnInit,Output, } from '@angular/core';

@Component({
  selector: 'app-passdata',
  templateUrl: './passdata.component.html',
  styleUrls: ['./passdata.component.css']
})
export class PassdataComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }
  @Output() datapasschild= new EventEmitter<string>();

}
