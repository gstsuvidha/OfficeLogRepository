import { Component, OnInit } from '@angular/core';
import { AdminConsolidatedReportingService } from '../../../services/admin-consolidated-reporting.service';


@Component({
  selector: 'app-admin-consolidated-company-reporting',
  templateUrl: './admin-consolidated-company-reporting.component.html',
  styleUrls: ['./admin-consolidated-company-reporting.component.css']
})
export class AdminConsolidatedCompanyReportingComponent implements OnInit {

  companyReportData;
  companyReportForVIsitor;
  companyReportForQueryRating;
  companyReportForServiceRating;
  companyReportForSoftwareIntrested;
  options:any;
  TotalVisits:number;TotalClientVisits:number;
TotalFirstVisits:number;
TotalFranchiseVisits:number;
TotalSecondOrThirdVisits:number;

TotalBadQueryRating :number;
TotalGoodQueryRating :number;
TotalVeryGoodQueryRating :number;
TotalExcellentQueryRating :number;

TotalBadServiceRating :number;
TotalGoodServiceRating :number;
TotalVeryGoodServiceRating :number;
TotalExcellentServiceRating :number;

TotalSoftwareInterested :number;

  constructor(private consolidatedService: AdminConsolidatedReportingService) { }

  ngOnInit() {
    this.consolidatedService.getCompanyReport().subscribe(res=>{
      this.companyReportData=res;
      this.TotalVisits=this.companyReportData.totalVisits;
      this.TotalClientVisits=this.companyReportData.totalClientVisits;
      this.TotalFirstVisits=this.companyReportData.totalFirstVisits;
      this.TotalFranchiseVisits=this.companyReportData.totalFranchiseVisits;
      this.TotalSecondOrThirdVisits=this.companyReportData.totalSecondOrThirdVisits;
      this.TotalBadQueryRating=this.companyReportData.totalBadQueryRating;
      this.TotalGoodQueryRating=this.companyReportData.totalGoodQueryRating;
      this.TotalVeryGoodQueryRating=this.companyReportData.totalVeryGoodQueryRating;
      this.TotalExcellentQueryRating=this.companyReportData.totalExcellentQueryRating;
      this.TotalBadServiceRating=this.companyReportData.totalBadServiceRating;
      this.TotalGoodServiceRating=this.companyReportData.totalGoodServiceRating;
      this.TotalVeryGoodServiceRating=this.companyReportData.totalVeryGoodServiceRating;
      this.TotalExcellentServiceRating=this.companyReportData.totalExcellentServiceRating;
      this.TotalSoftwareInterested=this.companyReportData.totalSoftwareInterested;
      this.chartForTotalVisitor(this.companyReportData);
      this.chartForQueryRating(this.companyReportData);
      this.chartForServiceRating(this.companyReportData);
      this.chartForSoftwareInterested(this.companyReportData);
    });
  }
           chartForTotalVisitor(companyReportForVIsitor){
            this.companyReportData = companyReportForVIsitor;
            this.companyReportForVIsitor = {
              datasets: [
                  {
                     label: 'Total Visits',
                     backgroundColor:"#FF6384",
                      data: [this.TotalVisits]
                  },
                  {
                    label: 'Total Client Visits',
                    backgroundColor:"#36A2EB",
                     data: [this.TotalClientVisits]
                  },
                  {
                    label: 'Total Franchise Visits',
                    backgroundColor:"#FFCE56",
                    data: [this.TotalFranchiseVisits]
                  },
                  {
                    label: 'Total First Visits',
                    backgroundColor:"#FF6384",
                    data: [this.TotalFirstVisits]
                  },
                  {
                    label: 'Total Second Or Third Visits',
                    backgroundColor:"#36A2EB",
                    data: [this.TotalSecondOrThirdVisits]
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
                label:{
                  fontSize: 18,
                  fontColor: 'black',
                  padding: 20,
              },
                  legend: {
                  position: 'bottom',
                    }
                    }
           };
           chartForQueryRating(companyReportForQueryRating){
           this.companyReportData = companyReportForQueryRating;
            this.companyReportForQueryRating = { 
              labels: ['Total Bad Query Rating','Total good Query Rating','Total Very Good Query Rating','Total Excellent Query Rating'],
              datasets: [
                  {
                     label: '',
                      data: [this.TotalBadQueryRating,this.TotalGoodQueryRating,this.TotalVeryGoodQueryRating,this.TotalExcellentQueryRating],
                      backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384"
                      ],
                      hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
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
           chartForServiceRating(companyReportForServiceRating){
           this.companyReportData = companyReportForServiceRating;
            this.companyReportForServiceRating = { 
              labels: ['Total Bad Service Rating','Total good Service Rating','Total Very Good Service Rating','Total Excellent Service Rating'],
              datasets: [
                  {
                     label: '',
                      data: [this.TotalBadServiceRating,this.TotalGoodServiceRating,this.TotalVeryGoodServiceRating,this.TotalExcellentServiceRating],
                      backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384"
                      ],
                      hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
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
           chartForSoftwareInterested(companyReports){
           this.companyReportData = companyReports;
            this.companyReportForSoftwareIntrested = { 
              labels: ['Total Software Interested',''],
              datasets: [
                  {
                     label: '',
                      data: [this.TotalSoftwareInterested],
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
