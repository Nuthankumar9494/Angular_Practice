import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybind',
  templateUrl: './propertybind.component.html',
  styleUrls: ['./propertybind.component.css']
})
export class PropertybindComponent implements OnInit {
  // public color='red';
  constructor() { }

  ngOnInit(): void {
  }
  name="Nuthan";
  disable=true;
  show="yes";
  marks='100';
  percentage=50;
  color='silver';
  employee=['Nuthan','prahasith','pavan','rohit','pavani'];
  students=['Ram','Ramu','reshna']
  Employeesheet=[
    {Name:'Nuthan',emaiid:'gatadi.xyz@.com',PhoneNo:89478924},
    {Name:'bhasker',emaiid:'gatadi.xyz@.com',PhoneNo:89478924},
    {Name:'babu',emaiid:'gatadi.xyz@.com',PhoneNo:89478924}
  ]
  Employeedata=[
    {Name:'Nuthan',emaiid:'gatadi.xyz@.com',PhoneNo:89478924 ,Procjects:['Tea time','Yoga registration']},
    {Name:'bhasker',emaiid:'gatadi.xyz@.com',PhoneNo:89478924,Procjects:['Tea world','Yoga registration']},
    {Name:'babu',emaiid:'gatadi.xyz@.com',PhoneNo:89478924,Procjects:['Tea must','employe registration']}
  ]
  bgcolor='blue';
  color1='red';
  change(){
    this.bgcolor='red';
    this.color1='gold';
  }
}
