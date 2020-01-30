import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/userDataService';
import * as $ from 'jquery';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit,AfterViewInit 
{
  ngAfterViewInit(): void 
  {
  }

  constructor() { }

  ngOnInit() {
  }

}
