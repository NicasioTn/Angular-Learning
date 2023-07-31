import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.css']
})
export class DropdownDemoComponent implements OnInit {
  cities: City[];
  value : any = [];
  selectedCity1!: City;
  
  productNames: string[] = [
    "peter",
    "ten",
    "7-11",
    "Ga",
    "OK",
    "AA",
    "80",
    "><",
  ];

  constructor(){
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {
  }



}

interface City {
  name: string,
  code: string
}
