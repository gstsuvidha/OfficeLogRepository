import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminConsolidatedReportingService {

  baseUrl="api/AdminConsolidatedReport"

  constructor(private http: HttpClient) { }

  getMarketingReport(){
    return this.http.get(`${this.baseUrl}/Marketings`);
    
  }
  getConversionReport(){
    return this.http.get(`${this.baseUrl}/Conversions`);
  }
  getCompanyReport(){
   return this.http.get(`${this.baseUrl}/Companies`)
  }
}
