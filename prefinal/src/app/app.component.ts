import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prefinal'; 
  cars = [
    {brand : "Toyota", model:" Vios", year:2014, price:2000},
    {brand : "Honda", model:" Jazz", year:2013, price:5000},
    {brand : "Ford", model:" everest", year:2011, price:3000},
    {brand : "Toyota1", model:" Vios2", year:2009, price:1000},
    {brand : "Toyota2", model:" Vios2", year:2008, price:2000},
    
  ];
  con : number = 0;
  car:any;
  constructor(){
    this.car = this.cars[0];
    for(let car of this.cars){
      if(car.price >= 2000){
        console.log((this.con++) + JSON.stringify(car));
      }else{
        console.log("price low")
      }
    }
    // console.log('value'+JSON.stringify(this.cars[0]));
    // for (let i = 0;i < 5;i++){}
  }
}
