import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
