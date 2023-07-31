import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webservice';
  constructor(private http : HttpClient){

  }
  // Overserable
  // listUser(){
  //   console.log('listUser');
  //   let request = this.http.get('http://202.28.34.250/webdev/user')
  //     .subscribe(response => {
  //       console.log('response: ' + JSON.stringify(response)); 
  //     }, error =>{
  //       console.log('error: ' + JSON.stringify(error)); 
  //     });
  //   console.log('continue');
  //   // request.unsubscribe();
  //   console.log('Next statement');
  // }
  async listUser(){
    console.log('listUser');
    let request = await this.http.get('http://202.28.34.250/webdev/user').toPromise();
    console.log('request: ' + JSON.stringify(request));
    console.log('continue');
    // request.unsubscribe();
    console.log('Next statement');
  }

}
