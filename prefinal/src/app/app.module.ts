import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { BoxComponent } from './box/box.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { Routes, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsModule} from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
  
const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: BoxComponent},
  {path: 'shop', component: ShopComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    MainComponent,
    ShopComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
