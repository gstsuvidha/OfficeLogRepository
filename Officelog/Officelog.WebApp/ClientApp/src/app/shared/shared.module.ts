import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';



@NgModule({
    imports: [
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AuthenticatedUserComponent,NavigationBarComponent],
    providers: [],
})
export class SharedModule { }
