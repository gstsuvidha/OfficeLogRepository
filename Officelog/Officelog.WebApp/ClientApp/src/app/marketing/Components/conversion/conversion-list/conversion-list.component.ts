import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { IMarketinglog } from '../../marketing-log-list/marketing';
import { ConversionServiceService } from '../../../../services/conversion-service.service';


@Component({
  selector: 'app-conversion-list',
  templateUrl: './conversion-list.component.html',
  styleUrls: ['./conversion-list.component.css']
})
export class ConversionListComponent implements OnInit {
   
  conversionList;
  selectedConversionList: IMarketinglog;
  id;

  constructor(private conversionService: ConversionServiceService,
              private _router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getConversionList();
  }
getConversionList(){
  this.conversionService.getConversions().subscribe(response=>{
    this.conversionList=response
  });
}
onRowSelect(event) { 
  this.id = event.data.id;
  console.log(this.id)
  this._router.navigate(['/conversion-form',this.id])
  
  
}
}
