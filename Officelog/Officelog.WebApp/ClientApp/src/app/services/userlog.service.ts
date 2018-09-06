
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from "../../../node_modules/rxjs";
import { IUserlog } from '../login-user-form/userlogin';
import { ServiceBase } from '../shared/service-base';
;
@Injectable({
    providedIn: 'root'
})
export class UserlogService extends ServiceBase<IUserlog> {

    userLogs: IUserlog[];
    constructor(private http: HttpClient) {
        super(http,'api/UserProfile')
    }
    

    intializeObject(): IUserlog {
        return {
            id : 0,
            name: "",
            contactNumber: "",
            designation: "",

        }
    }

    getProfile():Observable<IUserlog>{
        return this.http.get<IUserlog>(`${this.baseUrl}/Profile`);
    }

    getUserUnits():Observable<IUserlog[]>{
        return this.http.get<IUserlog[]>(`${this.baseUrl}/UserUnits`);
    }

   
}


