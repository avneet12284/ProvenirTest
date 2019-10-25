import { Injectable } from '@angular/core';
import { FormValues } from './formdata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoginValid(formData: FormValues): boolean{
      const {username, password} = formData;

      if(username==="test" && password==="test"){
        window.localStorage.setItem("ProvenirLoginTestForm", "pass");
        return true;
      }
      return false;
  }

  isLoginTokenValid() : boolean {
    let tokenValue =  window.localStorage.getItem("ProvenirLoginTestForm");
    if(tokenValue && tokenValue==="pass"){
      return true
    } else {
      return false;
    }
  }

  logout(){
    window.localStorage.removeItem("ProvenirLoginTestForm");
  }
}
