import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {

  loginTokenValid:boolean = false;
 
  constructor(private _router: Router, private loginService: LoginService){}

  canActivate(){
    this.loginTokenValid = this.loginService.isLoginTokenValid();
    
    if(!this.loginTokenValid){
       alert("You are not logged in and will be redirected to the login page");
       this._router.navigate(["/"]);
    }

    return this.loginTokenValid;
  }
  
}
