import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { SignupComponent } from './signup/signup.component';
import { HotelRegistrationComponent } from './hotelregistration/hotelregistration.component';

const routes: Routes = [
  {path : "", component: OwnerLoginComponent }, 
  {path : "signup", component : SignupComponent},
  {path : "ownersuccess", component : OwnersuccessComponent},
  {path : 'hotelregistration', component : HotelRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
