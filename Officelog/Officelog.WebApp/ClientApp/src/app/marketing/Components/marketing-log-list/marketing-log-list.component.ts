import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMarketinglog } from '../marketing-log-list/marketing';
import { MessageService } from 'primeng/components/common/api';
import { MarketinglogService } from '../../../services/marketinglog.service';



@Component({
  selector: 'app-marketing-log-list',
  templateUrl: './marketing-log-list.component.html',
  styleUrls: ['./marketing-log-list.component.css'],
  
})

export class MarketingLogListComponent implements OnInit {
  marketinglogs: IMarketinglog[];
  selectedMarketingLog : IMarketinglog;
  id : number;
  rowIndex;
  startDate:Date;
  lastDate:Date;
  
  
  
   

    

  constructor( private _marketinglogService:MarketinglogService ,
               private _router: Router,
               private messageService: MessageService,
             ) {}

  ngOnInit() {
    this.startDate=new Date();
    this.lastDate=new Date();
    this.searchByDate(this.startDate,this.lastDate);
    
    
    
}

  
  marketingLog(){
    this._router.navigate(['marketing_log']);
  }
onAddm(){
  this.id=0;
  this._router.navigate(['authenticated/marketing_log',this.id])
}
  onRowSelect(event) { 
    this.id = event.data.id;
    console.log(this.id)
    this._router.navigate(['authenticated/marketing_log',this.id])
  }

  showConfirm(rowData) {
    this.selectedMarketingLog = rowData;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}
clear() {
  this.messageService.clear('c');
 } 

onConfirm() {
  
  this._marketinglogService.delete(this.selectedMarketingLog.id).subscribe(() =>{
    this.searchByDate(this.startDate,this.lastDate);
    
});
this.messageService.clear('c');
}

onReject() {
  this.messageService.clear('c');
}
searchByDate(startDate:Date,lastDate: Date){
  this._marketinglogService.getMarketingListByDate(this.startDate,this.lastDate).subscribe(marketingLogList=>{
    this.marketinglogs=marketingLogList;
  })
}

patchConversion(rowData){
  this.selectedMarketingLog = rowData;
  this._marketinglogService.conversion(this.selectedMarketingLog,this.selectedMarketingLog.id).subscribe(() =>{
    this.searchByDate(this.startDate,this.lastDate);
  })
}
}
