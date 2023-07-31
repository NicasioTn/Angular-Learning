import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { MemberComponent } from './member/member.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ToolbarModule} from 'primeng/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Member2Component } from './member2/member2.component';
import { Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  {path : '', component: AppComponent},
  {path : 'login', component: LoginComponent},
  {path : 'member1', component: MemberComponent},
  {path : 'member2', component: Member2Component}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    HeaderComponent,
    FooterComponent,
    Member2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
