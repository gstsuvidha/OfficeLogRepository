import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyReportService {
baseUrl = "api/CompanyReport";
  constructor(private http: HttpClient) { }

  getCompanyReport(){

    return this.http.get(this.baseUrl);
  }
}
