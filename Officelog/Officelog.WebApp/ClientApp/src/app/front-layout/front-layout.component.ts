import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {

  // compLog=false;
  // markLog=false;

  constructor(private _router: Router){}

  companyLog(){

    this._router.navigate(['company_log']);
    // this.compLog=true;
    // this.markLog=false;
  }
  marketingLog(){
    this._router.navigate(['marketing_log']);
    // this.compLog=false;
    // this.markLog=true;
  }
  companyLogList(){

    this._router.navigate(['company_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
  marketingLogList(){

    this._router.navigate(['marketing_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
  dashboardLog(){

    this._router.navigate(['dashboard_log']);
    // this.compLog=true;
    // this.markLog=false;
  }


  ngOnInit() {
  }

}
