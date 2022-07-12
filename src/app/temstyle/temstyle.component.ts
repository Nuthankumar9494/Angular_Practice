import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temstyle',
  template: 
  `
    <h1 class="custom">Hello im inline template</h1>
    <h1 class="custom">Hello im 2 eg of inline template</h1>
  ` ,
  styleUrls: ['./temstyle.component.css']
})
export class TemstyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
