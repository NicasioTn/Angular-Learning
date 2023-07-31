import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private store : DataPassService) {
      console.log(store.cars[0].model);
   }

  ngOnInit(): void {
  }

}
