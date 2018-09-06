import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService : LoginService,private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot):boolean{

  //   const expectedRole = route.data.expectedRole;
  //    const expectedRole = localStorage.getItem("role")
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  
  

  //   if(!this.loginService.isAuthenticated() || )
  //   {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }

  

    if (!this.loginService.isAuthenticated()) {
        this.router.navigate(['/login']);
    }

    return this.loginService.isAuthenticated();
}
}
