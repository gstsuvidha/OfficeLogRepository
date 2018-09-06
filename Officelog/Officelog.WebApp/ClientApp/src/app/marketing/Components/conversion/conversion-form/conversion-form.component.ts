import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { IMarketinglog } from '../../marketing-log-list/marketing';
import { MarketinglogService } from '../../../../services/marketinglog.service';

export interface ServiceItems {
  serviceType: string;
  rate: number;
}

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {
  public conversionForm: FormGroup;
  interrestedInService: SelectItem[];
  marketingLog: IMarketinglog;
  id: number;

  constructor(private fb: FormBuilder,
              private marketingLogService: MarketinglogService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
    this.getMarketingLog(this.id);
    });
    this.conversionForm = this.newForm();

      this.interrestedInService = [
      { label: 'Accounting', value: 'Accounting' },
      { label: 'Income Tax Filing', value: 'Income Tax Filing' },
      { label: 'TDS Filing', value: 'TDS Filing' },
      { label: 'GST Filing', value: 'GST Filing' },
      { label: 'Consultancy', value: 'Consultancy' },
      { label: 'Company related', value: 'Company related' },
      { label: 'Loan Documentation', value: 'Loan Documentation' }
    ];
    
  }
  newForm():FormGroup{
    return this.fb.group({
      id: 0,
      name: [''],
      contactNumber: [],
      fee:[],
      serviceItems : this.fb.array([])
    });
  }

  private getMarketingLog(id):void{
    this.marketingLogService.getOne(id)
    .subscribe((marketingLog:IMarketinglog)=> this.onMarketingLogRetrieved(marketingLog)
    );
  }

  get serviceTypeItems(): FormArray {
    return <FormArray>this.conversionForm.get('serviceItems');
  }

  private buildServiceType(serviceItem: ServiceItems): FormGroup {
    return this.fb.group({
        serviceType: [serviceItem.serviceType],
        rate : [serviceItem.rate]
      
    })
  }

  private onMarketingLogRetrieved(marketingLog : IMarketinglog) :void{
    this.marketingLog = marketingLog;
    console.log(this.marketingLog); 

    if (this.marketingLog.id == 0) {
      this.conversionForm = this.newForm();
    
  }
  
    else{
      this.conversionForm.patchValue({

      id: this.marketingLog.id,
      name: this.marketingLog.name,
      contactNumber: this.marketingLog.contactNumber,
      fee: this.marketingLog.fee

      });
      for (let i = 0; i < this.marketingLog.serviceItems.length; i++) {
        this.serviceTypeItems.push(this.buildServiceType(this.marketingLog.serviceItems[i]));

    }
    }
    console.log(this.marketingLog)
  }


}
