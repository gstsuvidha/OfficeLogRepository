
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { LoginService, ILogin } from '../services/login.service';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  
  constructor(
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private loginService : LoginService) { }

  ngOnInit() {
    
  }

  login: ILogin;


    doLogin(userName: string, password: string): void {
        var online= navigator.onLine;
        if(!online){
            
        }


        this.login = {
            userName: userName,
            password: password
        };


            this.loginService.getToken(this.login)
                .subscribe(res => {
                    // if (res. === 200)
                        this.onLoginSuccess();
                });//,
            // error => alert("Failed" + error));


    }

    onLoginSuccess(): void {
        this._router.navigate(['authenticated/dashboard_log']);

    }

}

  


