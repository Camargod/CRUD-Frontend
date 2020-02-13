import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Admin } from 'src/app/entities/admin';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  @Output() onLogin : EventEmitter<any> = new EventEmitter();
  loginForm;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() 
  {
    this.loginForm = this.formBuilder.group({
      username: '',
      pwd: ''
    });
  }

  login()
  {
    this.onLogin.emit(this.loginForm.value);
    this.onLogin.unsubscribe();
  }

}
