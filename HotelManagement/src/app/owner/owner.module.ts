import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { FormsModule } from '@angular/forms';
import { HotelRegistrationComponent } from './hotelregistration/hotelregistration.component';



@NgModule({
  declarations: [
    OwnerLoginComponent,
    SignupComponent,
    OwnersuccessComponent,
    HotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    FormsModule
  ],
})
export class OwnerModule { }
