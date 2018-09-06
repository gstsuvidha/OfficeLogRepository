import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  [x: string]: any;
  constructor(private _router : Router) { }

  ngOnInit() {
  }
  marketingLogList() {

    this._router.navigate(['/marketing_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
  companyLogList(){

    this._router.navigate(['company_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
  companydashboardLog(){

    this._router.navigate(['companydashboard_log']);
   
  }
  dashboardLog(){

    this._router.navigate(['dashboard_log']);
   
  }
}
