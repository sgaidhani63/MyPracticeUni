import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { LoginComponentComponent } from './login-component/login-component.component';
import { SampleModuleModule } from './sample-module/sample-module.module';
console.log('Login');

@NgModule({
  declarations: 
  [AppComponent, 
   LoginComponentComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SampleModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
