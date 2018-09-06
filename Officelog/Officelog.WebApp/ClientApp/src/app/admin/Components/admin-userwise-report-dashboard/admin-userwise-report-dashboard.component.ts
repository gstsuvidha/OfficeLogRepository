import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { UserlogService } from '../../../services/userlog.service';
import { IUserlog } from '../../../login-user-form/userlogin';

@Component({
  selector: 'app-admin-userwise-report-dashboard',
  templateUrl: './admin-userwise-report-dashboard.component.html',
  styleUrls: ['./admin-userwise-report-dashboard.component.css']
})
export class AdminUserwiseReportDashboardComponent implements OnInit {

 xyz:any;
  users : IUserlog[];
  usersSelectList : SelectItem[];
  userName;
  constructor(private _userlogService: UserlogService,
    private _router : Router) { }

  ngOnInit() {
    this. _userlogService.getUserUnits().subscribe(response=> {
      this.users = response;
      this.usersSelectList = this.users.map(us =>({
        label : us.name,
        value : us.id
      }))
    
      console.log(this.users);
    
    })
   
  }

  
  adminUserProfileCompanyReporting(){
    this._router.navigate(['/authenticated/admin_user_profile_company_reporting',this.userName]);
  }
  adminUserMarketingCompanyReporting(){
    this._router.navigate(['/authenticated/admin_user_profile_marketing_reporting',this.userName]);
  }
 

}
