import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescript';
  heroes = [
    {Team: "Avengers", type: "spiderman", years:2019, popular:100},
    {Team: "Avengers", type: "Ironman", years:2015, popular:70},
    {Team: "Avengers", type: "Thor", years:2016, popular:40},
    {Team: "Avengers", type: "Captain", years:20012, popular:65},
    {Team: "Avengers", type: "Huk", years:2015, popular:20}
  ];
  hero : any ;
  Team = ' ';
  type = ' ';
  year : any;
  inputType : any;
  constructor(){
    this.hero = JSON.stringify(this.heroes[0]);
    this.Team = this.heroes[0].Team;
    this.type = this.heroes[0].type;
    this.year = this.heroes[0].years;
    
    // console.log('Value ' + this.heros[0].type);
    // for(let hero of this.heros){
    //   if(hero.popular >= 50){
    //     console.log('Value ' + JSON.stringify(hero));
    //   }
    //   else{
    //     console.log('Popular is low');
    //   }
      
    // }
    // console.log('Value ' + JSON.stringify(this.heros[0]));


  }
  showData()
  {
    // console.log(this.inputType);
    if(this.inputType == 2){
      console.log('Value ' + JSON.stringify(this.heroes[1]))
    }
  }
}
