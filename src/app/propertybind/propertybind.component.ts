import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybind',
  templateUrl: './propertybind.component.html',
  styleUrls: ['./propertybind.component.css']
})
export class PropertybindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="Nuthan";
  disable=true;
  show="yes";
  marks='100';
  percentage=50;
  color='silver';
}
