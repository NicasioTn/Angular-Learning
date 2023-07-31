import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitterModule } from 'primeng/splitter';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {InplaceModule} from 'primeng/inplace';
import {ImageModule} from 'primeng/image';
import {FocusTrapModule} from 'primeng/focustrap';
import {ProgressBarModule} from 'primeng/progressbar';
import {BadgeModule} from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    RadioButtonModule,
    SplitterModule,
    FileUploadModule,
    HttpClientModule,
    InplaceModule,
    ImageModule,
    FocusTrapModule,
    ProgressBarModule,
    BadgeModule,
    ChipModule,
    MessagesModule,
    MessageModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

export class ModelComponent {

  selectedValue: string = 'val1';
  display: boolean = false;
  

  showDialog() {
    this.display = true;
  }

}

