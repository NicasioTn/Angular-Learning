import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPassService} from '../data-pass.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  name : string = "";
  password: any;
  show : any;
  constructor(private router: Router,
              private data : DataPassService,
              private http : HttpClient) {
    this.name = "peter";
    console.log("PW is " + this.password);
  }

  ngOnInit(): void {
  }
  ShowPW(){
    this.show = this.password; 
  }
  goToShop(){
    this.data.cars = [ // cars from datapass service
      {brand : "Toyota", model:" Vios", year:2014, price:2000},
      {brand : "Honda", model:" Jazz", year:2013, price:5000},
      {brand : "Ford", model:" everest", year:2011, price:3000},
      {brand : "Toyota1", model:" Vios2", year:2009, price:1000},
      {brand : "Toyota2", model:" Vios2", year:2008, price:2000}
    ];
    this.router.navigateByUrl('/shop');
  }
  listUser(){
    // connect with web service
    let request = this.http.get('http://202.28.34.250/webdev/user')
        .subscribe (response => {
              console.log('response' + JSON.stringify(response));
        }, error => {
              console.log('error' + JSON.stringify(error));
        });
    console.log('Next state')
  }
}
