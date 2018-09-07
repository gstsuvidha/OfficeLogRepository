import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SelectItem} from 'primeng/components/common/selectitem';
import { ActivatedRoute, Router } from '@angular/router';
import { IMarketinglog } from '../marketing-log-list/marketing';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { MarketinglogService } from '../../../services/marketinglog.service';
import {MessageService} from 'primeng/api';



export interface ServiceItems {
  serviceType: string;
  rate: number;
}


@Component({
  selector: 'app-marketing-log-form',
  templateUrl: './marketing-log-form.component.html',
  styleUrls: ['./marketing-log-form.component.css'],
  providers: [MessageService]
})
export class MarketingLogFormComponent implements OnInit {

  public userForm: FormGroup;
  marketingLog: IMarketinglog;
  interrestedInService: SelectItem[];
  zone: SelectItem[];
  currentScenario: SelectItem[];
  blockPreviewYes = false;
  blockPreviewNo = false;
  interested_Yes = false;
  interested_No = false;
  ifOther = false;
  startDate: Date;
  lastDate: Date;
  id: number;
 

  





  constructor(private fb: FormBuilder,
              private router: Router, 
              private route: ActivatedRoute,
              private marketingLogService: MarketinglogService,
              private messageService: MessageService
             ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    this.getMarketingLog(this.id);
    });

    this.userForm = this.newForm();

    this.zone=[
      { label: 'Kankarbagh', value: 'Kankarbagh' },
      { label: 'Rajendra Nagar', value: 'Rajendra Nagar' },
      { label: 'Nala road', value: 'Nala road' },
      { label: 'Kadamkuan', value: 'Kadamkuan' },
      { label: 'Anisabad', value: 'Anisabad' },
      { label: 'P C Colony', value: 'P C Colony' },
      { label: 'Mithapur', value: 'Mithapur' }
    ]

    this.interrestedInService = [
      { label: 'Accounting', value: 'Accounting' },
      { label: 'Income Tax Filing', value: 'Income Tax Filing' },
      { label: 'TDS Filing', value: 'TDS Filing' },
      { label: 'GST Filing', value: 'GST Filing' },
      { label: 'Consultancy', value: 'Consultancy' },
      { label: 'Company related', value: 'Company related' },
      { label: 'Loan Documentation', value: 'Loan Documentation' }
    ];
    this.currentScenario = [
      { label: 'CA', value: 'CA' },
      { label: 'ADVOCATE', value: 'ADVOCATE' },
      { label: 'ACCOUNTANT', value: 'ACCOUNTANT' },
      { label: 'SELF', value: 'SELF' },
      { label: 'UNREGISTERED', value: 'UNREGISTERED' }
    ];


  }
  newForm():FormGroup{
    return this.fb.group({
      id: 0,
      name: ['',Validators.required],
      contactNumber: [[],[Validators.required]],
      softwareInterested: ['',Validators.required],
      rateUs: [''],
      fee:0,
      serviceInterested: ['',Validators.required],
      rateUsForNo: [''],
      currentScenario: [''],
      suggestionForNo: [''],
      suggestionForYes: [''],
      area: ['',Validators.required],
      date:new Date(),
      serviceItems : this.fb.array([])
    });
  }

  private getMarketingLog(id):void{
    this.marketingLogService.getOne(id)
    .subscribe((marketingLog:IMarketinglog)=> this.onMarketingLogRetrieved(marketingLog)
    );
  }

 

  saveMarketingLog():void {

    if (this.userForm.valid) {

        let p = Object.assign({}, this.marketingLog, this.userForm.value);

         this.marketingLogService.save(p, this.id)
            .subscribe(si=>{});
          this.onSaveComplete()
          
    }
  
  
    else if (!this.userForm.dirty) {
        this.onSaveComplete();
    }
  }
   onSaveComplete(){
    this.router.navigate(['authenticated/marketing_log_list'])
  }

  softwareInterestedYes() {
    this.blockPreviewYes = true;
    this.blockPreviewNo = false;
  }
  softwareInterestedNo() {
    this.blockPreviewYes = false;
    this.blockPreviewNo = true;
    
  }
  serviceInterestedYes() {
    this.interested_Yes = true;
    this.interested_No = false;
  
  }
  serviceInterestedNo() {
    this.interested_No = true;
    this.interested_Yes = false;
    
  }

  
  get serviceTypeItems(): FormArray {
    return <FormArray>this.userForm.get('serviceItems');
  }

  addNewServiceType(type : HTMLInputElement,rate : HTMLInputElement){
    var serviceItem : ServiceItems = {
      serviceType : String(type.value),
      rate : Number(rate.value)
    }
    this.addServiceLine(serviceItem)
  }

  deleteServiceType(index: number) {
    this.serviceTypeItems.removeAt(index);
  }

  addServiceLine(serviceItem : ServiceItems):void{
    this.serviceTypeItems.push(this.buildServiceType(serviceItem));
  }
  private buildServiceType(serviceItem: ServiceItems): FormGroup {
    return this.fb.group({
        serviceType: [serviceItem.serviceType],
        rate : [serviceItem.rate]
      
    })
  }

  
  otherReason() {
    this.ifOther = true;
  }
  closeOtherReason() {
    this.ifOther = false;
  }
  marketingLogList() {

    this.router.navigate(['/marketing_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
 
  private onMarketingLogRetrieved(marketingLog : IMarketinglog) :void{
    this.marketingLog = marketingLog;

    if (this.marketingLog.id == 0) {
      this.userForm = this.newForm();
    
  }
  
    else{
      this.userForm.patchValue({

      id: this.marketingLog.id,
      name: this.marketingLog.name,
      contactNumber: this.marketingLog.contactNumber,
      softwareInterested: this.softwareConvert(),// this.marketingLog.softwareInterested,
      rateUs: this.marketingLog.rateUs,
      serviceInterested: this.serviceConverter(),//marketingLog.serviceInterested,
      rateUsForNo: this.rateUsConverter(),//marketingLog.rateUsForNo,
      currentScenario: this.marketingLog.currentScenario,
      suggestionForNo: this.marketingLog.suggestionForNo,
      suggestionForYes: this.marketingLog.suggestionForYes,
      area: this.marketingLog.area,
      date: this.marketingLog.date,
      fee: this.marketingLog.fee,
       
      });
      
     }
  }
  softwareConvert(){
    if(this.marketingLog.softwareInterested=="Yes"){
      this.softwareInterestedYes();
      return "Yes";
    }
    else{
      this.softwareInterestedNo();
      return "No";
    }
    
  }
  serviceConverter(){
    if(this.marketingLog.serviceInterested=="Yes"){
      this.serviceInterestedYes();
      for (let i = 0; i < this.marketingLog.serviceItems.length; i++) {
        this.serviceTypeItems.push(this.buildServiceType(this.marketingLog.serviceItems[i]));
      }
      return "Yes";
    }
    else{
      this.serviceInterestedNo();
      return "No";
    }
    
  }
  rateUsConverter(){
    if(this.marketingLog.rateUsForNo=="others"){
      this.otherReason();
      return "others";
    }
    else if(this.marketingLog.rateUsForNo=="alreadyHave"){
     return "alreadyHave";
    }
    else{
      return "notFriendly";
    }
  }

}
