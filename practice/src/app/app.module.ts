import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { HttpClientModule } from "@angular/common/http";

import { DataViewModule } from "primeng/dataview";
@NgModule({
  declarations: [
    AppComponent,
    DropdownDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule ,
    DataViewModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
