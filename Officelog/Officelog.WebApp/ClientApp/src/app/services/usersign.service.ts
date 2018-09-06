

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from "../../../node_modules/rxjs";

import { IUserSign } from '../sign-in-form/usersignin';
import { ServiceBase } from '../shared/service-base';
;
@Injectable({
    providedIn: 'root'
})
export class UserSignService extends ServiceBase<IUserSign> {

    userSignForm: IUserSign[];
    constructor(private http: HttpClient) {
        super(http,'')
    }

    intializeObject(): IUserSign {
        return {
            id : 0,
            name: "",
        password: "",

           

        }
    }
   
}













/*IUserSign{
    
    id: number;
    signInName:string;
   
    signInPassword: string;*/
