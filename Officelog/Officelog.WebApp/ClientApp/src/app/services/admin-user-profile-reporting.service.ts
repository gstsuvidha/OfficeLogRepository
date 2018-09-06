import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminUserProfileReportingService {
  baseUrl = "api/AdminUserReport";

  constructor(private http: HttpClient) { }
  
  
  getUserAdminCompanyReport(userProfileId : number){

    return this.http.get(`${this.baseUrl}/Companies?UserProfileId=${userProfileId}`);
  }
  getUserAdminMarketReport(userProfileId : number){

    return this.http.get(`${this.baseUrl}/Marketings?UserProfileId=${userProfileId}`);
  }
  getUserAdminConversionReport(userProfileId : number){

    return this.http.get(`${this.baseUrl}/Conversions?UserProfileId=${userProfileId}`);
  }
}
