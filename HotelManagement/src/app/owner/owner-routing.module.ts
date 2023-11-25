import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : "", component: OwnerLoginComponent }, 
  {path : "signup", component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
