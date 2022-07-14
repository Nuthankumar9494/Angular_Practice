import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent implements OnInit {

  constructor() { }
  @Input () time=0;

  ngOnInit(): void {
  }

}
