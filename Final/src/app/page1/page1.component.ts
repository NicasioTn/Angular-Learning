import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  date: any;
  all : any;
  i : number = 4;
  lid! : any;
  localName!: string;
  country!: string;
  display : boolean = false;
  countryAll!: Country[] ;
  selected!: Country;
  property!: string;
  image! : string;

  constructor(private http : HttpClient) { 
    this.http.get("http://localhost/ServiceSearch/locationAll")
    .subscribe(data => {
      console.log(JSON.stringify(data));
      JSON.stringify(data);
      this.all = data;

    }, error => {
      console.log(JSON.stringify(error));
    });

    this.countryAll = [
      {name: 'ประเทศไทย'},
      {name: 'ญี่ปุ่น'},
      {name: 'เนเธอร์แลนด์'}
  
  ];
    
  }

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.date = new Date();
 
    })
  }
  edit(){
    let data = [{
      lname: this.localName,
      name: this.selected.name,
      detail: this.property,
      image: this.image,
      lid: Number(this.lid)
    }];
    console.log(JSON.stringify(data));
    this.http.post("http://localhost/ServiceSearch/update/json/" , JSON.stringify(data))
    .subscribe(data2 => {
      console.log(JSON.stringify(data2));
      JSON.stringify(data2);
    }, error => {
      console.log(JSON.stringify(error));
    });
    this.display = false;
    
  }
  
  show(id: number, name : string, count : string, detail : string, image : string ){
    this.display = true;
    this.localName = name;
    this.country = count;
    this.property = detail;
    this.image = image;
    this.lid = id;
    console.log(typeof Number(this.lid));
  }
}
interface Country {
    name: string
}