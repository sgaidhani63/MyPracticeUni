import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    OwnerLoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
  ],
})
export class OwnerModule { }
