import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';

import { ICompanylog } from '../company-log-list/company';
import { Message } from 'primeng/components/common/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanylogService } from '../../../services/companylog.service';


@Component({
  selector: 'app-company-log-form',
  templateUrl: './company-log-form.component.html',
  styleUrls: ['./company-log-form.component.css']
})
export class CompanyLogFormComponent implements OnInit {
  id: number;
  blockPreviewYes: boolean = false;
  blockPreviewNo: boolean = false;
  ifOther: boolean = false;
  visitorType: SelectItem[];
  companylogs: ICompanylog;
  userForm: FormGroup;
  displayDialog: boolean = false;
  pageTitle;

  constructor(private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _companylogService: CompanylogService) {

  }
  companyLogList() {

    this._router.navigate(['company_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getCompany(this.id);

    });

    this.visitorType = [
      { label: 'First', value: 'First' },
      { label: 'Second or Third', value: 'Second or Third' },
      { label: 'Client', value: 'Client' },
      { label: 'Franchise', value: 'Franchise' }
    ];
    this.userForm = this.newForm();
    /*this.userForm = this.fb.group({
      tradeName: null,
      contact: null,
      queryHandling: null,
      serviceProvided: null,
      visitorType: null,
      usingSoftware:null,
      rateUs: null,
      reasonForNotInterestedInSoftware: null
      });*/
  }
  newForm(): FormGroup {
    return this.fb.group({
      id: 0,
      name: [''],
      contactNumber: [''],
      queryHandling: [''],
      serviceProvided: [''],
      visitorType: [''],
      softwareInterested: [''],
      rateUs: [''],
      suggestionForYes: [''],
      suggestionForNo: [''],
      date:new Date(),
      rateUsForNo: ['']
    });
  }

  private getCompany(id: number) {
    this._companylogService.getOne(id).subscribe(
      (companylogs: ICompanylog) => this.onCompanyLogRetrieved(
        companylogs));

  }

  private onCompanyLogRetrieved(companylogs: ICompanylog): void {

    this.companylogs = companylogs;

    if (this.companylogs.id == 0) {
      this.userForm = this.newForm();
      this.pageTitle = 'Add in Companylog';
      console.log("add");
    }

    else {
      this.pageTitle = `Edit  in Company Log: ${this.companylogs.name}`;
      //  let opDate = new Date(this.customer.customerOpeningDate);
      // Update the data on the form
      this.userForm.patchValue({
        id:this.companylogs.id,
        name:this.companylogs.name,
        contactNumber:this.companylogs.contactNumber,
        queryHandling:this.companylogs.queryHandling,
        serviceProvided:this.companylogs.serviceProvided,
        visitorType:this.companylogs.visitorType,
        softwareInterested:this.companylogs.softwareInterested,
        rateUs:this.companylogs.rateUs,
        rateUsForNo:this.companylogs.rateUsForNo,
        suggestionForYes:this.companylogs.suggestionForYes,
        suggestionForNo:this.companylogs.suggestionForNo,
        date:this.companylogs.date

      })
    }
  }
  saveCompanyLog(): void {

    if (this.userForm.valid) {

      let companylogsToSave = Object.assign({}, this.companylogs, this.userForm.value);

      this._companylogService.save(companylogsToSave, this.id).subscribe(() => {});
      this.onSaveComplete();
    }


    else if (!this.userForm.dirty) {
      this.onSaveComplete();
    }
  }

  private onSaveComplete(): void {
    const displayMsg = this.id == 0 ? 'Saved' : 'Updated';
    // this.msgs = [];
    // this.msgs.push({
    //   severity : 'success',
    //   summary : 'Success Message',
    //   detail : 'Customer Sucessfully' + displayMsg
    // });
    this._router.navigate(['authenticated/company_log_list']);


  }

  redioYes() {
    this.blockPreviewYes = true;
    this.blockPreviewNo = false;
  }
  redioNo() {
    this.blockPreviewYes = false;
    this.blockPreviewNo = true;
  }
  otherReason() {
    this.ifOther = true;
  }
  closeOtherReason() {
    this.ifOther = false;
  }

  

}





