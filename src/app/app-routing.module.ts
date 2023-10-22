import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes= [
 
  { path:'', component: LoginComponentComponent},
  { path: 'sample-component', loadChildren:()=>import('./sample-module/sample-module.module').then(mod=>mod.SampleModuleModule)},
  { path: 'second-module', loadChildren:()=>import('./second-module/second-module.module').then(mod=>mod.SecondModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
