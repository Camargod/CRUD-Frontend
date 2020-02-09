import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { User } from '../entities/user';
import {UserDataService} from '../services/userDataService'
import { NotificationsService } from 'angular2-notifications';



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
  
  constructor(private _cookieService : CookieService, private _userDataService: UserDataService,private _notifications: NotificationsService) 
  {
    // for more details on config options please visit fullPage.js docs
    this.config = 
    {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#0f4c75','#0f4c75'],
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
    if(this._cookieService.get("isLogged"))
    {
      this.isLogged = true;
    }
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
  }  

  getRef(fullPageRef) 
  {
    this.fullpage_api = fullPageRef;
  }

  async getUsers()
  {
    try
    {
      await this._userDataService.get().subscribe(async e=>
      {
        this.usersArray = e.body;
        this.isLogged = !this.isLogged;
        this.removeFullPageLock();
        this.isLoaded = true;
      },
      err=>
      {
        this._notifications.error("Erro de requisição de usuários:",err);
      });
    }
    catch(err)
    {
      console.log(err)
    }
    
  }

  login()
  {
    this.getUsers();
  }

  removeFullPageLock()
  {
    if(!this.isLogged)
    {
      this.fullpage_api.setAllowScrolling(false);
      this.fullpage_api.silentMoveTo('Home', 0);
      this.fullpage_api.setKeyboardScrolling(false);
    }
    else
    {
      this.fullpage_api.setAllowScrolling(true);
      this.fullpage_api.silentMoveTo('Home', 0);
      this.fullpage_api.setKeyboardScrolling(true);
    }
  }
  moveDown()
  {
    this.fullpage_api.moveSectionDown();
  }
  moveUp()
  {
    this.fullpage_api.moveSectionUp();
  }

}
