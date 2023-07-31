import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-member2',
  templateUrl: './member2.component.html',
  styleUrls: ['./member2.component.css']
})
export class Member2Component implements OnInit {
  i : any ;
  constructor(public datapass : DatapassService, 
    private router : ActivatedRoute) {

    
    let idx = router.snapshot.params['index'];
    this.i = idx;
    console.log(datapass.hero[idx].model,);
    
   }

  ngOnInit(): void {
  }

  showHero(){

  }

}
