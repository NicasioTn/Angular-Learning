import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router'; 
import { DataPassService } from '../data-pass.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  
  contact_us : string = "Contact : 02-10101010 | Facebook fanpage: หมูกระทะลุงยิ้ม | Instagram: _MukataLungyim";
  date: any;
  
  detail = [
    {name : "โค้ก",  price:50},
    {name : "ไอศกรีม",  price:20},
    {name : "ชุดอิ่มครบจบที่นี่", price:159},
    {name : "ชุดเดียวเจ็บแต่จบ",  price:249},
  ];
  now : any;
  pipe = new DatePipe('en-US');
  myFormattedDate : any;
  sum : number = 0; 
  display: boolean = false;
  num : number[] = [1, 1, 1, 1] ;
  many : any = []
  food_id! : number 
  food:any;
  priceShow:any;
  bill: any = []
  i : number = 1; // อัพเดตใบบเสร็จ
  count : number = 0;
  checkOut : boolean = false;
  confirm :boolean = false;
  Editdisplay :boolean = false;
  order : number = 0;
  checkBill : any = [];

  constructor(private router: Router, 
              private http : HttpClient,
              private datapass : DataPassService) {
    // for(let i = 0 ; i < 4 ; i++) {
    //   this.bill[i] = {};
    // }
    this.datapass.sum = this.sum;
    this.many = this.num ;
    console.log(this.bill.length);
  }

  ngOnInit(): void {
    // this.todayString = new Date().toDateString();
    // console.log(this.todayString);
    this.now = Date.now();
    this.myFormattedDate = this.pipe.transform(this.now, ' d MMMM y HH:mm');
    console.log(this.myFormattedDate);
    
    timer(0, 1000).subscribe(() => {
      this.date = new Date();
      // console.log(this.date);
    
      
    })
  }
  data : any = []
  // change page
  goPage2(){
    this.router.navigateByUrl('/page2');

  }

  // เลือกจำนวน อาหาร
  showDialog(id : number ){
    this.display = true;
    this.food = this.detail[id].name;
    this.priceShow = this.detail[id].price;
    this.food_id = id;
    // ---------------------

  } 

  // เพิ่มลงแปรก่อน ลง data base
  add(fid :number, mode : string) {
    // หลอก list 
    if(this.bill.length == 0){
      if (fid < 4){
        for(let i = 0; i < fid; i++){
          this.bill[i] = {}
        }
      }
    }else if(this.bill.length == 1 && fid == 2){ 
      this.bill[fid - 1] = {}
    }else if (this.bill.length == 1 && fid == 3){
      this.bill[fid - 1] = {}
      this.bill[fid - 2] = {}
    }
   
    this.bill[fid] = 
    { 
        fid:this.order++, 
        oid: this.food_id, 
        name: this.detail[fid].name, 
        price: this.detail[fid].price,
        many:this.many[fid], sumBill: (this.many[fid] * this.detail[fid].price), 
        List: this.i
    }
    
    // console.log(JSON.stringify('value' + this.bill[fid].oid));
    this.Editdisplay = false;
    this.display = false;
    console.log('value'+this.num[fid]);
    if(mode == 'add' ){
      this.sum = this.sum + this.bill[fid].sumBill; // ราคารวมทั้งสิ้น
    }
    else{
      if(this.num[fid] != 1){
        this.sum = this.sum + this.bill[fid].sumBill;
      }
      
    }
    // this.Editdisplay = false;
    console.log('Length of Bill= ' + this.bill.length);
    
    this.checkBill[this.i] = 
    { 
      ListofBill: this.i,
      date: this.myFormattedDate,
      amount: this.sum
    }
    
  }  
  // ปิด Dialog เพิ่ม ลบ จำนวนรายการ 
  disable(){
    this.display = false;
  }
  
  // เพิ่มจำนวนรายการ
  plus(){
    this.num[this.food_id] = this.num[this.food_id] + 1;
    
  }

  // ลดจำนวนรายการ
  minus(){
    if(this.num[this.food_id] < 1 ){
      // if value equals 0 don't minis again
    }
    else{
      this.num[this.food_id] = this.num[this.food_id] - 1; 
    }
    
    
  }
  // ยืนยัน ก่อนสั่ง Order
  checkOutDia(){
    this.checkOut = true;
  }
  // แสดงรายงนที่สั่งทั้งหมด
  confirmOrder(){
      this.confirm = true;
      this.insertBefore();
  }

  // เพิ่มลง data base
  async insert(fid : number){

    console.log('fid = '+fid)
    console.log('List Data = ' + JSON.stringify(this.bill[fid]));
    this.confirm = false;
    for(let i = 0 ; i < this.bill.length ; i++){
      let request = await this.http.post("http://localhost/ServiceSearch/food/insert", JSON.stringify(this.bill[i]))
      .subscribe(response => {
        console.log(JSON.stringify(response));
      }, err => {
        console.log(JSON.stringify(err));
      });
    }
    
    this.checkOut = true;
    // อัพเดต เลขใบเสร็จ
    this.i++;
    
  }

  insertBefore(){
    this.http.post("http://localhost/ServiceSearch/food/bill", JSON.stringify(this.checkBill[this.i]))
    .subscribe(result => {
      console.log(JSON.stringify(result));
    }, err => {
      console.log(JSON.stringify(err));
    });
  }
  
  // แก้ไขรายการ
  dialogEdit(id : number){ 
    this.Editdisplay = true;
    this.food = this.detail[id].name;
    this.priceShow = this.detail[id].price;
    this.food_id = id;
  }

  // ลบรายการ
  deleteMenu(id : number ){
    this.Editdisplay = false;
    this.bill[id] = [];
    console.log(JSON.stringify(this.bill));
  }

  // หลังจากสั่งอาหารเสร็จให้ เตรียมใบเสร็จใหม่แล้วล้างใบเสร็จเก่า
  resetMenu(){
    this.bill = [];
    this.sum = 0;
    this.checkOut=false;
    this.num = [1, 1, 1, 1] ;
    this.food_id = 1;
  }
}

