import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponentComponent } from './sample-component/sample-component.component';

const routes: Routes = [{
  path:'sample-component',component:SampleComponentComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleModuleRoutingModule { }
