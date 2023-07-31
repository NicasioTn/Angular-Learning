import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-member1',
  templateUrl: './member1.component.html',
  styleUrls: ['./member1.component.css']
})
export class Member1Component implements OnInit {

  constructor(private router : Router, 
    private data : DatapassService) { }

  ngOnInit(): void {
  }
  gotomember2(){
    // console.log("come");
    this.data.hero = [
      {Team: "Avengers", type: "spiderman", years:2019, popular:100},
      {Team: "Avengers", type: "Ironman", years:2015, popular:70},
      {Team: "Avengers", type: "Thor", years:2016, popular:40},
      {Team: "Avengers", type: "Captain", years:20012, popular:65},
      {Team: "Avengers", type: "Huk", years:2015, popular:20}
    ];
    this.router.navigate(['/member2'])
  }
}
