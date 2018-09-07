import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../guard/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatedUserComponent } from '../shared/authenticated-user/authenticated-user.component';
import { MarketingLogFormComponent } from './Components/marketing-log-form/marketing-log-form.component';
import { MarketingLogListComponent } from './Components/marketing-log-list/marketing-log-list.component';
import { ConversionListComponent } from './Components/conversion/conversion-list/conversion-list.component';
import { MarketingDashboardComponent } from './Components/marketing-dashboard/marketing-dashboard.component';
import { ConversionFormComponent } from './Components/conversion/conversion-form/conversion-form.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

const appRoutes: Routes = [
  {path: 'authenticated',
    component : AuthenticatedUserComponent,
  children :[
    { path: 'marketing_log/:id', component: MarketingLogFormComponent },
    { path: 'marketing_log_list', component: MarketingLogListComponent },
    { path: 'conversion_list', component: ConversionListComponent },
    { path: 'marketing-dashBoard', component: MarketingDashboardComponent },
    { path: 'conversion-form/:id', component: ConversionFormComponent},
     
      
  ]}
  
];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
    MessageModule,
    MessagesModule
  ],
  declarations: [
    MarketingLogFormComponent,
    
    MarketingLogListComponent,
    ConversionListComponent,
    MarketingDashboardComponent,
    
    ConversionFormComponent,

  ]
})
export class MarketingModule { }
