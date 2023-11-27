import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { QunersuccessComponent } from './qunersuccess/qunersuccess.component';
import { OunersuccessComponent } from './ounersuccess/ounersuccess.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';



@NgModule({
  declarations: [
    OwnerLoginComponent,
    SignupComponent,
    QunersuccessComponent,
    OunersuccessComponent,
    OwnersuccessComponent,

  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
  ],
})
export class OwnerModule { }
