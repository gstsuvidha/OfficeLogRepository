import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ConversionServiceService {
   baseUrl='api/conversions';
  constructor( private http: HttpClient) { }

  getConversions(){
    return this.http.get(`${this.baseUrl}`);
  }
  
}
