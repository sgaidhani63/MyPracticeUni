import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes= [
 
  { path:'', component: LoginFormComponent},
   {path: 'sample-form', loadChildren:()=>import ('./sample-form/sample-form.component').then(mod=>mod.SampleFormComponent)},
   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
