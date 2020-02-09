import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../modules/home-page/home-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { CookieService } from 'ngx-cookie-service';
import { LoginPageComponent } from '../modules/login-page/login-page.component'
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import { UserCreateComponent } from '../modules/user-create/user-create.component';
import { UserDataService } from '../services/userDataService';
import { UserCardComponent } from '../modules/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';

import { SimpleNotificationsModule } from 'angular2-notifications';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UserCreateComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFullpageModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: 
  [
    CookieService,
    UserDataService
  ],
  bootstrap: [AppComponent,HomePageComponent]
})
export class AppModule { }
