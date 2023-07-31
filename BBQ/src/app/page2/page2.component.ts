import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { timer } from 'rxjs';
import { DataPassService } from '../data-pass.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  contact_us : string = "Contact : 02-10101010 | Facebook fanpage: หมูกระทะลุงยิ้ม | Instagram: _MukataLungyim";
  date: any;
  price_food : any;
  Allbill : any;
  Order_bill : any;
  sum : any;


  constructor(private router: Router,
    private datapass : DataPassService,
    private http : HttpClient) {

    this.price_food =  {drink : 50, sweet:20, set1:159, set2:249};
    // console.log("value" + this.datapass.sum);
    this.sum = this.datapass.sum;
    this.getBill();
    this.sum = 0;
    
    
  }

  ngOnInit(): void {
    // this.date = new Date();

    timer(0, 1000).subscribe(() => {
      this.date = new Date();
 
    })
  }

  goPage1(){
    this.router.navigateByUrl('');
  }

  getBill(){
    this.http.get("http://localhost/ServiceSearch/bill")
    .subscribe(data => {
      // console.log(JSON.stringify(data));
      JSON.stringify(data);
      this.Allbill = data;

    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  showDetail(id : number){
    console.log(id);
    // show detail
    this.http.get("http://localhost/ServiceSearch/bill/"+ id)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.Order_bill = data;

    }, error => {
      console.log(JSON.stringify(error));
    });

    // select sumbill
    this.http.get("http://localhost/ServiceSearch/sumBill/"+ id)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.sum = data;

    }, error => {
      console.log(JSON.stringify(error));
    });

  }

 
}
