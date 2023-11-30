import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
