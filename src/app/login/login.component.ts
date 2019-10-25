import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValues } from '../formdata';
import { LoginService } from '../login.service';

@Component({
  selector: 'provenirTest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  areCredentialsInvalid:boolean = false;

  constructor(private _router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(formData: FormValues){
    let isLoginSuccess:boolean = this.loginService.isLoginValid(formData);
    if(isLoginSuccess){
      this.areCredentialsInvalid = false;
      this._router.navigate(["/portfolio"]);
    } else {
      this.areCredentialsInvalid = true;
    } 
  }

}
