import { Routes, RouterModule } from '@angular/router';
import { AdminUserwiseReportDashboardComponent } from './Components/admin-userwise-report-dashboard/admin-userwise-report-dashboard.component';
import { AdminUserProfileCompanyReportingComponent } from './Components/admin-user-profile-company-reporting/admin-user-profile-company-reporting.component';
import { AdminUserProfileMarketingReportingComponent } from './Components/admin-user-profile-marketing-reporting/admin-user-profile-marketing-reporting.component';
import { AdminConsolidatedMarketingReportingComponent } from './Components/admin-consolidated-marketing-reporting/admin-consolidated-marketing-reporting.component';
import { AdminConsolidatedCompanyReportingComponent } from './Components/admin-consolidated-company-reporting/admin-consolidated-company-reporting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatedUserComponent } from '../shared/authenticated-user/authenticated-user.component';




const appRoutes: Routes = [
  {path: 'authenticated',
    component : AuthenticatedUserComponent,
   
  children :[
    { path: 'admin-userwise-report-dashboard', component: AdminUserwiseReportDashboardComponent},
    { path: 'admin_user_profile_company_reporting/:userName', component: AdminUserProfileCompanyReportingComponent},
    { path: 'admin_user_profile_marketing_reporting/:userName', component: AdminUserProfileMarketingReportingComponent},
    { path: 'Marketing-report', component: AdminConsolidatedMarketingReportingComponent},
    { path: 'Company-report', component: AdminConsolidatedCompanyReportingComponent},
     
  ]}
  
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [
    AdminUserProfileMarketingReportingComponent,
    AdminUserProfileCompanyReportingComponent,
    AdminUserwiseReportDashboardComponent,
    AdminConsolidatedMarketingReportingComponent,
    AdminConsolidatedCompanyReportingComponent

  ]
})


export class AdminModule { 

}
