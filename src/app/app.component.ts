import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-world';
  data="Heloo welcome to my world";
  getValue(){
    return "If you want to stay in my word you need to be Enroll first"
  }
  getName(){
    alert(name);
  }
  getvalue(){
    console.warn("function")
  }
}
