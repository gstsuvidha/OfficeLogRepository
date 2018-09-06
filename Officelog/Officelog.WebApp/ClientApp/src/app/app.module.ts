import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { CompanylogService } from './services/companylog.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarketinglogService } from './services/marketinglog.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserFormComponent } from './login-user-form/login-user-form.component';
import { UserlogService } from './services/userlog.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { UserSignService } from './services/usersign.service';
import { CompanyReportService } from './services/company-report.service';
import { MarketingConversionReportService } from './services/marketing-conversion-report.service';
import { SharedModule } from './shared/shared.module';
import { AdminUserProfileReportingService } from './services/admin-user-profile-reporting.service';
import { LoginService } from './services/login.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { TokenInterceptor } from './services/token-interceptor';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AdminModule } from './admin/admin.module';
import { CompanyModule } from './company/company.module';
import { AuthenticatedUserComponent } from './shared/authenticated-user/authenticated-user.component';
import { ConversionServiceService } from './services/conversion-service.service';
import { MarketingModule } from './marketing/marketing.module';
import { MessageService } from 'primeng/api';


export function tokenGetter() {
  return localStorage.getItem("token");
}


const appRoutes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedUserComponent,
    canActivate: [AuthGuardService],
    data : {
      expectedRole : "Admin"
    },
    children: [
      { path: 'dashboard_log', component: DashboardComponent, canActivate: [AuthGuardService] },
      { path: 'user_log', component: LoginUserFormComponent, canActivate: [AuthGuardService] },


    ]
  },
  { path: '', redirectTo: 'authenticated/dashboard_log', pathMatch: 'full' },
  { path: '**', redirectTo: 'authenticated/dash-board' },
  { path: 'login', component: SignInFormComponent },


];

@NgModule({
  declarations: [

    AppComponent,
    FrontLayoutComponent,
    DashboardComponent,
    LoginUserFormComponent,
    SignInFormComponent,

  ],


  imports: [

    SharedModule,
    BrowserModule,
    AdminModule,
    CompanyModule,
    MarketingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {

        headerName: 'Authorization',
        authScheme: 'Bearer ',
        tokenGetter: tokenGetter,

      }
    })

  ],

  providers: [CompanylogService, UserlogService, MarketinglogService, UserSignService,ConversionServiceService,
    CompanyReportService, MarketingConversionReportService, AdminUserProfileReportingService, LoginService, AuthGuardService,MessageService
   , {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
