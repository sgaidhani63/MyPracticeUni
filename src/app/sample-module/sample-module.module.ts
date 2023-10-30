import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleModuleRoutingModule } from './sample-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleComponentComponent } from './sample-component/sample-component.component';


@NgModule({
  declarations: [
    SampleComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SampleModuleRoutingModule

  ]
})
export class SampleModuleModule { }
