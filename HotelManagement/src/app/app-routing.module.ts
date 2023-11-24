import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './CommonScreens/landing/landing.component';

const routes: Routes = [
  {path : '', component: LandingComponent},
  {path: "admin",loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path: "owner",loadChildren:()=>import('./owner/owner.module').then(mod=>mod.OwnerModule)},
  {path: "user",loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
