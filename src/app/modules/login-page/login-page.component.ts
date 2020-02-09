import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  @Output() onLogin : EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() 
  {
  }

  login()
  {
    this.onLogin.emit('');
    this.onLogin.unsubscribe();
  }

}
