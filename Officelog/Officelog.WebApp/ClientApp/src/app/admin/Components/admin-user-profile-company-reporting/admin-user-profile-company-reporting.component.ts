import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserProfileReportingService } from '../../../services/admin-user-profile-reporting.service';
import { CompanyReportService } from '../../../services/company-report.service';

@Component({
  selector: 'app-admin-user-profile-company-reporting',
  templateUrl: './admin-user-profile-company-reporting.component.html',
  styleUrls: ['./admin-user-profile-company-reporting.component.css']
})
export class AdminUserProfileCompanyReportingComponent implements OnInit {userName;
  company;
  report;
  querydata:any;
  visitData: any;
  servicedata:any;
  softwaredata:any;
  dataBar:any;
  tv1:number;
  tv2:number;
  tv3:number;
  tv4:number;
  tv5:number;
  
  qr1:number;
  qr2:number;
  qr3:number;
  qr4:number;
  sr1:number;
  sr2:number;
  sr3:number;
  sr4:number;
  sw:number;
  
  optq:any;
  optsw:any;
  optsr:any;
   opt: any = {
    legend: { position: 'bottom'}
  };


  constructor(private _router : Router,private route : ActivatedRoute,
    private companyReportService : CompanyReportService,
              private adminCompanyService : AdminUserProfileReportingService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.userName = params['userName'];
      this.getCompanyReport(this.userName);
      
       
    })
/*for fetching data for chart start*/
this.adminCompanyService .getUserAdminCompanyReport(this.userName).subscribe(response=> {
  this.report = response;
  this.tv1=this.report.totalVisits;
  this.tv2=this.report.totalClientVisits;
  this.tv3=this.report.totalFranchiseVisits;
  this.tv4=this.report.totalFirstVisits;
  this.tv5=this.report.totalSecondOrThirdVisits;
 this. qr1=this.report.totalBadQueryRating;
 this. qr2=this.report.totalGoodQueryRating;
 this. qr3=this.report.totalVeryGoodQueryRating;
 this. qr4=this.report.totalExcellentQueryRating;
 this. sr1=this.report.totalBadQueryRating;
 this. sr2=this.report.totalGoodQueryRating;
 this. sr3=this.report.totalVeryGoodQueryRating;
 this. sr4=this.report.totalExcellentQueryRating;
 this. sw=this.report.totalSoftwareInterested;

 this.getChartForTotalVisitorType(this.report);
 this.getChartForQueryType(this.report);
 this.getChartForServiceType(this.report);
 this.getChartForSoftwareType(this.report);
  console.log(this.report);
  (error : any) => {
    alert('TimeOut')
  } 
})
/* fectching data for chart ends*/
   
     
           

  }
  adminUserProfileCompanyReporting(){
    this._router.navigate(['/admin_user_profile_company_reporting']);
  }

  getCompanyReport(userName){
    this.adminCompanyService.getUserAdminCompanyReport(userName).subscribe(res => this.company = res);
  }

  getChartForTotalVisitorType(visitData){
    this.report=visitData;
    this.visitData = {
      labels: ['Total Visit','Total Client Visit','total Franchise visit','Total First Visit','Total Second or third Visit'],
      datasets: [
          { label: 'Total Visitor Data',
              data: [this.tv1, this.tv2, this.tv3, this.tv4, this.tv5],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB"
              ], 
             
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB"
              ]
          }]    
      };
      this.opt={
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      
        legend: {
          labels:{
              fontSize: 18,
              fontColor: 'black',
              padding: 20,
          },
            position: 'bottom',
        }}
  }

  /*chart data for query rating start from here */
  getChartForQueryType(querydata){
    this.report=querydata;
    this.querydata = {
      labels: ['Bad Query Rating','Good Query Rating','Very Good Query Rating','Excellent Query Rating'],
      datasets: [
          { label: 'Total Query Rating',
              data: [this.qr1, this.qr2, this.qr3, this.qr4],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                 
                  "#36A2EB"
              ], 
             
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                 
                  "#36A2EB"
              ]
          }]    
      };
      
      this.optq={
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      
        legend: {
          labels:{
              fontSize: 18,
              fontColor: 'black',
              padding: 20,
          },
            position: 'bottom',
        }}
    
    
  }/*chart data for query rating end from here */
  /*chart data for srvice rating start from here */
  
  getChartForServiceType(servicedata){
    this.report=servicedata;
    this.servicedata = {
      labels: ['Bad Query Rating','Good Query Rating','Very Good Query Rating','Excellent Query Rating'],
      datasets: [
          { label: 'Total Service Rating',
              data: [this.sr1, this.sr2, this.sr3, this.sr4],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                 
                  "#36A2EB"
              ], 
             
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                 
                  "#36A2EB"
              ]
          }]    
      };
      
      this.optsr={
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      
        legend: {
          labels:{
              fontSize: 18,
              fontColor: 'black',
              padding: 20,
          },
            position: 'bottom',
        }}
    
    
  }
/*chart of service data type end*/
/*sofrware data start here*/

getChartForSoftwareType(softwaredata){
  this.report=softwaredata;
  this.softwaredata = {
    labels: ['SoftwareIntrested'],
    datasets: [
        { label: 'Total Software Rating',
            data: [this.sw],
            backgroundColor: [
              
                "#36A2EB"
            ], 
           
            hoverBackgroundColor: [
                
               
              
                "#36A2EB"
            ]
        }]    
    };
    
    this.optsw={
     
    
      legend: {
        labels:{
            fontSize: 18,
            fontColor: 'black',
            padding: 20,
        },
          position: 'right',
      }}
  
  
}
/*software data ended here*/

}
