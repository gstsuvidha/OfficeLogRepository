import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketingConversionReportService {

  baseUrl = "api/MarketingReport"

  constructor(private http: HttpClient) { }

  getMarketingReports(){

    return this.http.get(this.baseUrl);
  }

  getConversionReports(){
    return this.http.get(`${this.baseUrl}/Converted`)
  }
}
