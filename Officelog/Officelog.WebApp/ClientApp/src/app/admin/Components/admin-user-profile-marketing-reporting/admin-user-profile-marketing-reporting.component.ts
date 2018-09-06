import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserProfileReportingService } from '../../../services/admin-user-profile-reporting.service';

@Component({
  selector: 'app-admin-user-profile-marketing-reporting',
  templateUrl: './admin-user-profile-marketing-reporting.component.html',
  styleUrls: ['./admin-user-profile-marketing-reporting.component.css']
})
export class AdminUserProfileMarketingReportingComponent implements OnInit {
  marketingReport;
  conversionReport;
  market;
  conversion;
  visitData: any;
  dataBar:any;
  userName;
  company;
  tsoft:number;
  tservice:number;
  tconvo:number;
  marketdata;
  convodata;
 optsw:any;
   opt: any = {
    legend: { position: 'bottom'}
  };

  constructor(private _router : Router,
    private route: ActivatedRoute,
    private adminCompanyService : AdminUserProfileReportingService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      this.userName = params['userName'];
      this.getMarketingReport(this.userName);
      
       
    })
    /*for fetching data for chart start*/
this.adminCompanyService .getUserAdminMarketReport(this.userName).subscribe(response=> {
  this.marketingReport = response;
  this.tsoft=this.marketingReport.totalSoftwareInterested;
  this.tservice=this.marketingReport.totalServiceInterested;
  this.getChartForMarket(this.marketingReport);
  console.log(this.marketingReport);
  (error : any) => {
    alert('TimeOut')
  } 

})
/* fectching data for market chart ends*/
/* fectching data for conversion chart starts*/

  this.adminCompanyService.getUserAdminConversionReport(this.userName).subscribe(response => 
    {this.conversionReport = response;
      this.tconvo=this.conversionReport.totalConversions;
      this.getChartForConversion(this.conversionReport);
      console.log(this.conversionReport);
      (error : any) => {
        alert('TimeOut')
      } 
    
    })
    /* fectching data for conversion chart ends*/
  
}

/**ng on it end here */

/*chart for market start*/
getChartForMarket(marketdata){
  this.marketingReport=marketdata;
  this.marketdata = {
    labels: ['Total Software Intrested','Total Service Intrested'],
    datasets: [
        { label: 'Marketing Report',
            data: [this.tsoft, this.tservice],
            backgroundColor: [
                "#FF6384",
                
               
                "#36A2EB"
            ], 
           
            hoverBackgroundColor: [
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

/*chart data for market rating end from here */

/*sofrware data start here*/

getChartForConversion(convodata){
  this.conversionReport=convodata;
  this.convodata ={
    labels: ['Conversion Report'],
    datasets: [
        { label: 'TotalConversion Report',
            data: [this.tconvo],
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

  adminUserProfileMarketingReporting(){
    this._router.navigate(['/admin_user_profile_marketing_reporting']);
  }

  getMarketingReport(userName){
    this.adminCompanyService.getUserAdminMarketReport(userName).subscribe(res => this.market = res);
  }
  getConversionReport(userName){
    this.adminCompanyService.getUserAdminConversionReport(userName).subscribe(res => this.conversion = res);
  }
}
