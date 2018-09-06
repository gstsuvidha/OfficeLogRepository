import { Component, OnInit } from '@angular/core';
import { AdminConsolidatedReportingService } from '../../../services/admin-consolidated-reporting.service';


@Component({
  selector: 'app-admin-consolidated-marketing-reporting',
  templateUrl: './admin-consolidated-marketing-reporting.component.html',
  styleUrls: ['./admin-consolidated-marketing-reporting.component.css']
})
export class AdminConsolidatedMarketingReportingComponent implements OnInit {

  marketingReports;
  conversionReports;
  marketingReportData;
  conversionReportData;
  TotalSoftwareInterested:number;
  TotalServiceInterested:number;
  AvgPriceOfSoftware:number;
  TotalConversion:number;
  options:any;


  constructor(private consolidatedService: AdminConsolidatedReportingService,
              ) { }

  ngOnInit() {
  

   this.consolidatedService.getMarketingReport().subscribe(res=>{
     this.marketingReports=res;
     this.TotalSoftwareInterested=this.marketingReports.totalSoftwareInterested;
     this.TotalServiceInterested=this.marketingReports.totalServiceInterested;
     this.AvgPriceOfSoftware=this.marketingReports.averagePriceOfSoftware;
     this.chartForMarketingReport(this.marketingReports);
     console.log(this.marketingReports);
   });

  this.consolidatedService.getConversionReport().subscribe(res=>{
     this.conversionReports=res;
     this.TotalConversion=this.conversionReports.totalConversions;
     this.chartForTotalConversion(this.conversionReports);
     (error : any) => {
      alert('TimeOut')
    } 
  });

}


chartForMarketingReport(marketingReportData){
  this.marketingReports = marketingReportData;
  this.marketingReportData = { 
    labels: ['Total software interested','Total service interested','Average price of software'],
    datasets: [
        {
           label: '',
            data: [this.TotalSoftwareInterested,this.TotalServiceInterested,this.AvgPriceOfSoftware],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
        }]    
    }
    this.options={
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      },
    
            legend: {
              position:false
            }}
  

};

chartForTotalConversion(conversionReportData){
  this.conversionReports = conversionReportData;
  this.conversionReportData = { 
    labels: ['Total Conversion',''],
    datasets: [
        {
           label: '',
            data: [this.TotalConversion],
            backgroundColor: [
              "#FF6384"
            ],
            hoverBackgroundColor: [
              "#FF6384"
            ],
        }]    
    }
    this.options={
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      },
    
            legend: {
                position: false,
            }}
  

};
}