import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { User } from '../entities/user';
import Axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  headerSelectedSection = 0;
  config;
  fullpage_api;
  title = 'EtelgPass';
  isLogged : boolean = false;
  usersArray : Array<User>= [];
  isLoaded : boolean = false;
  constructor(private cookieService : CookieService) 
  {
    // for more details on config options please visit fullPage.js docs
    this.config = 
    {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['Home', 'Sistema'],
      sectionsColor: ['#1b262c','#1b262c'],
      menu: '#menu',
      // fullpage callbacks
      onLeave: (origin, destination, direction) =>
      {
        this.headerSelectedSection = destination.index;
      },
    };
  }

  ngOnInit(): void 
  {
    if(this.cookieService.get("isLogged"))
    {
      this.isLogged = true;
    }
    this.getUsers().then((e)=>{this.usersArray = e; console.log(this.usersArray);this.isLoaded = true});
    // $(document).ready(e=>{alert("yaaay")});
  }

  ngAfterViewInit(): void 
  {
    if(!this.isLogged)
    {
      this.fullpage_api.setAllowScrolling(false);
      this.fullpage_api.silentMoveTo('Home', 0);
      this.fullpage_api.setKeyboardScrolling(false);
    }
    $('.fp-tableCell').css({'vertical-align': 'baseline !important;'});
  }  

  getRef(fullPageRef) 
  {
    this.fullpage_api = fullPageRef;
  }

  async getUsers() : Promise<Array<User>>
  {
    let response = await Axios.get('http://localhost:1234/devs');
    return response.data;
  }
}
