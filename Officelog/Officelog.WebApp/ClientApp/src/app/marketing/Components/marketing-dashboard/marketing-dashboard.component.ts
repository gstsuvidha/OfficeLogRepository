import { Component, OnInit, Input } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { MarketingConversionReportService } from '../../../services/marketing-conversion-report.service';



@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.css']
})
export class MarketingDashboardComponent implements OnInit {
  
  marketingReport;
  conversionReport;
  marketingReportData;
  conversionReportData;
  
  options:any;
  
  x:number;
  y:number;
  z:number;
  


  constructor(private marketingAndConversionService : MarketingConversionReportService) { 
    
   }
   

  ngOnInit() {
    this.marketingAndConversionService.getMarketingReports().subscribe(res => 
      {
      this.marketingReport = res;
      this.y=this.marketingReport.totalSoftwareInterested;
      this.z=this.marketingReport.totalServiceInterested;
      this.getPieChartForMarketing(this.marketingReport);
     });

    this.marketingAndConversionService.getConversionReports().subscribe(res => {
      this.conversionReport = res;
      this.x=this.conversionReport.totalConversions;
      this.getPieChartForConversion(this.conversionReport);
      console.log(this.x);
      
      (error : any) => {
        alert('TimeOut')
      } 
    });
   

    
   }

 
  getPieChartForConversion(conversionReportData){
    this.conversionReport = conversionReportData;
    this.conversionReportData = { 
      labels: ['Total Conversions',''],
      datasets: [
          {
             label: '',
              data: [this.x],
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
                labels:{
                    fontSize: 18,
                    fontColor: 'black',
                    padding: 20,
                },
                  position: 'left',
              }}
    

  };
  getPieChartForMarketing(marketingReportData){
    this.marketingReport = marketingReportData;
    this.marketingReportData = { 
      labels: ['Total Software Interested','Total Service Interested'],
      datasets: [
          { 
            label: '',
              data: [this.y,this.z],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"
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
                labels:{
                    fontSize: 18,
                    fontColor: 'black',
                    padding: 20,
                },
                  position: 'left',
              }}
    

  }

}
