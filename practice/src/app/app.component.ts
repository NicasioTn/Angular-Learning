import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'practice';
  heroes : string[] = ['peter', 'ten'];
  i = 0;

  constructor(){
    

  }
  add(){
    this.heroes.push('spider' + this.i++);
  }
  
}
