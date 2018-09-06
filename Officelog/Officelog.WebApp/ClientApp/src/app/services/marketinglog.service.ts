import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from "../../../node_modules/rxjs";
import { ServiceBase } from '../shared/service-base';
import { IMarketinglog } from '../marketing/Components/marketing-log-list/marketing';
@Injectable({
  providedIn: 'root'
})
export class MarketinglogService extends ServiceBase<IMarketinglog> {
  
  marketingLogs: IMarketinglog[];
  constructor(private http: HttpClient) {
    super(http, 'api/Marketings');
  }

  intializeObject(): IMarketinglog {
    return{
      name: "",
      contactNumber: 0,
      softwareInterested: "",
      rateUs: "",
      serviceInterested: "",
      rateUsForNo: "",
      currentScenario: "",
      suggestionForNo: "",
      suggestionForYes: "",
      fee:0,
      area: "",
      date:new Date,
      Conversion:"",
      id : 0,
      serviceItems:[]

    }
  }
  getMarketingListByDate(startDate : Date,lastDate : Date):Observable<IMarketinglog[]>{
    return this.http.get<IMarketinglog[]>(`${this.baseUrl}?fromDate=${startDate.toDateString()}&toDate=${lastDate.toDateString()}`);
  }

  conversion(marketingLog : IMarketinglog,id: number) : Observable<IMarketinglog>{
    return this.http.patch<IMarketinglog>(`${this.baseUrl}/converted?id=${id}`,marketingLog);
  }

 
}


