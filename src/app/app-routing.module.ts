import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes= [
 
  { path:'', component: LoginComponentComponent},
  
  { path: 'sample-module', loadChildren:()=>import('./sample-module/sample-module.module').then(mod=>mod.SampleModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
