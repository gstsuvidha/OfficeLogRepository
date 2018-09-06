
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { ICompanylog } from '../company-log-list/company';
import {ConfirmationService} from 'primeng/api';
import {Message, LazyLoadEvent} from 'primeng/components/common/api';
import { CompanylogService } from '../../../services/companylog.service';


@Component({
  selector: 'app-company-log-list',
  templateUrl: './company-log-list.component.html',
  styleUrls: ['./company-log-list.component.css'],
 
})
export class CompanyLogListComponent implements OnInit {
   companylogs: ICompanylog[];
   selectedCompanyLog: ICompanylog;
  id: number = null;
  msgs: Message[] = [];
  displayDialogDelete : boolean;
  toDate:Date;
  fromDate:Date;
  CompanySummary:any[];
  totalVisit=1200;
  serviceIntrested=890;
  queryIntrested=270;

  constructor(private _companylogService: CompanylogService,
    private _router: Router,
    private confirmationService:ConfirmationService) {

  }

  ngOnInit() {
    this.toDate=new Date();
   this.fromDate=new Date();
  this.searchByDate(this.fromDate,this.toDate);
 }

  // getCompanyLogList() {
  //   this._companylogService.getAll().subscribe(companyLogList => {
  //     this.companylogs = companyLogList;
  //   });
  // }
  
  onAddc() {
    this.id=0;
    this._router.navigate(['authenticated/company_log', this.id])
  }
  onXYSelect(event) {
    this.id = event.data.id;
    console.log(this.id)
    this._router.navigate(['authenticated/company_log', this.id])
  }
  searchByDate(fromDate:Date,toDate:Date){
    this._companylogService.getCompaniesByDate(this.fromDate,this.toDate).subscribe(companyLogList => {
      this.companylogs = companyLogList;
    });
   }

 /* deleteFromList(id:number){
    this.files = this.files.splice(index, 1);

  }*/
  
  showDialogToDelete(Rowdata){
    this.selectedCompanyLog = Rowdata;
    console.log(Rowdata);
    this.displayDialogDelete = true;
    
    this.confirmationService.confirm({
      message : 'Do you want to delete this record?',
      header: 'Delete Confirmation',
          icon: 'fa fa fa-fw fa-trash', 
          accept: () => {
            this._companylogService.delete(this.selectedCompanyLog.id).subscribe(() =>{
              this.searchByDate(this.fromDate,this.toDate);
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
          });         
          },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
     
    });
  } 
}

