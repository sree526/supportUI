import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SupportLoginComponent } from './support-login/support-login.component';
import {AppRoutingModule} from './routing.module';

import { ShowhideDirective } from './directives/showhide.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { WarningComponent } from './warning/warning.component';
import { TextMaskModule } from 'angular2-text-mask';
import {LoginService} from './services/loginService';
import { ApplicationsComponent } from './applications/applications.component';
import { Header2Component } from './header2/header2.component';
import { NbkidComponent } from './nbkid/nbkid.component';
import {NBKIDService} from './services/addService'
@NgModule({
  declarations: [
    AppComponent,
    SupportLoginComponent,
    ShowhideDirective,
    HeaderComponent,
    WarningComponent,
    ApplicationsComponent,
     Header2Component,
     NbkidComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     TextMaskModule
   ], 
  providers: [LoginService,NBKIDService],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
