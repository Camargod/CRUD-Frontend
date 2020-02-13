import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { UserDataService } from 'src/app/services/userDataService';
import * as $ from 'jquery';
import { Observable, timer, Subscription } from 'rxjs';
import { Admin } from 'src/app/entities/admin';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit,AfterViewInit 
{
  @Input() admin : Admin;
  time;
  private subscription: Subscription;

  ngAfterViewInit(): void 
  {
  }

  constructor() { }

  ngOnInit() 
  {
    this.timeUpdate();
  }


  
  timeUpdate()
  {

    try
    {
      function checkTime(i) 
      {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
      timer(0, 1000).subscribe(()=>
      {
        let time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        this.time = h + ":" + m + ":" + s;
        setTimeout(this.timeUpdate,1000);
      });
    }

    catch(err)
    {
      
    }
    
  }
}
