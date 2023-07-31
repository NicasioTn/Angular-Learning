import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { SplitterModule } from 'primeng/splitter';
import { FormsModule } from "@angular/forms";
import { PanelModule } from 'primeng/panel';
import { ImageModule} from 'primeng/image';
import { ButtonModule} from 'primeng/button';
import { Page2Component } from './page2/page2.component';
import { DialogModule} from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    FormsModule,
    PanelModule,
    AccordionModule,
    BrowserAnimationsModule,
    ImageModule,
    ButtonModule,
    DialogModule,
    TableModule,
    HttpClientModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}



