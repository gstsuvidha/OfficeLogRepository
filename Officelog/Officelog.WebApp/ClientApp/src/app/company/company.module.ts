import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyLogFormComponent } from './components/company-log-form/company-log-form.component';
import { CompanyLogListComponent } from './components/company-log-list/company-log-list.component';
import { CompanydashboardComponent } from './components/companydashboard/companydashboard.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatedUserComponent } from '../shared/authenticated-user/authenticated-user.component';



const appRoutes: Routes = [
  {path: 'authenticated',
    component : AuthenticatedUserComponent,
  children :[
    { path: 'companydashboard_log', component: CompanydashboardComponent},
    { path: 'company_log/:id', component: CompanyLogFormComponent},
   
    { path: 'company_log_list', component: CompanyLogListComponent},
   
  ]}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  declarations: [

    CompanyLogFormComponent,
    CompanyLogListComponent,
    CompanydashboardComponent,

  ]
})
export class CompanyModule { }
