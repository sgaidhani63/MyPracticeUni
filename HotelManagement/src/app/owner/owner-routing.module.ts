import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : "", component: OwnerLoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
