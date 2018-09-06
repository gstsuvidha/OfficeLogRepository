
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, Message } from 'primeng/api';
import { UserlogService } from '../services/userlog.service';
import { IUserlog } from './userlogin';


@Component({
  selector: 'app-login-user-form',
  templateUrl: './login-user-form.component.html',
  styleUrls: ['./login-user-form.component.css']
})
export class LoginUserFormComponent implements OnInit {
  userProfileForm: FormGroup;
  action: string;
  pageTitle;
  userlogs:IUserlog;
  id: number;
  msgs:Message[] = [];
  constructor(private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userlogService: UserlogService) { }

  ngOnInit() {
 this.userProfileForm=this.fb.group({
   id:'',
   name:[''],
   contactNumber:[''],
   designation:[''],
 });
   this. _userlogService.getProfile().subscribe(up =>{
     this.userlogs=up;
     console.log(up);
     this.userProfileForm.patchValue({
       id:this.userlogs.id,
       name:this.userlogs.name,
       contactNumber:this.userlogs.contactNumber,
       designation:this.userlogs.designation

     });
    /* this._activatedRoute.params.subscribe(params=>
    {
      this.action=params['action'];
      if(this.action=='edit'){
        this.userProfileForm.enable();
      }
      else{
        this.userProfileForm.disable();
      }
    });*/
   });
   this.pageTitle=`User Log`;

  }
 
  onSave(): void{
    if (this.userProfileForm.dirty && this.userProfileForm.valid){
      let p =Object.assign({},this.userlogs,this.userProfileForm.value);
    /* this.loadingService.busy= this._userlogservice.updateProfile(p)
    .subscribe(()=>this.onSaveComplete());*/
    }
    else if( !this.userProfileForm.dirty){
      this.onSaveComplete();
    }
  }
  private onSaveComplete(): void {
   /* UserSetting.setYearSettings(this.userProfileForm.get('selectedYear').value);
    this.msgs = [];
    this.msgs.push({
      severity : 'success',
      summary : 'Success Message',
      detail : 'User Profile Updated' 
    });
  
    // Reset the form to clear the flags*/
    this.userProfileForm.reset();
    this._router.navigate(['/user_log']);
  }

  userLog(){

    this._router.navigate(['user_log']);
    
  }

}
