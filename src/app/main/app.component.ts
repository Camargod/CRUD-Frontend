import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { User } from '../entities/user';
import {UserDataService} from '../services/userDataService'
import { NotificationsService } from 'angular2-notifications';
import { Admin } from '../entities/admin';
import { UserCard } from '../entities/userCard';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable({
  providedIn:'root'
})

export class AppComponent implements OnInit, AfterViewInit
{
  headerSelectedSection = 0;
  config;
  fullpage_api;
  title = 'EtelgPass';
  isLogged : boolean = false;
  usersArray : Array<User>= [];
  usersCards : Array<UserCard> = [];
  isLoaded : boolean = false;
  admin : Admin;
  constructor(private _cookieService : CookieService, private _userDataService: UserDataService,private _notifications: NotificationsService) 
  {
    // for more details on config options please visit fullPage.js docs
    this.config = 
    {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#0f4c75','#0f4c75'],
      menu: '#menu',
      touchSensitivity: 15,
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
        this.convertUserToUserCard();
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

  async login(admin:Admin, isNew: string = "false")
  {
    await this._userDataService.postAdmin(admin,isNew).subscribe(async e=>
    {
      if(e.status == 418)
      {
        this._notifications.error("Usuário ja existente:","Tente outro nome");
      }
      else
      {
        let logged = e.body;
        this.admin = new Admin(logged.id,logged.username,logged.pwd);
        this.getUsers();
      }
    });
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
  convertUserToUserCard()
  {
    this.usersArray.map(e=>{
      this.usersCards.push({user:e,isEditing:false,isNew:false});
    });
  }
}
