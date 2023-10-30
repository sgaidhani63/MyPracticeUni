import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor (public router: Router){
  }
  RegForm()
  {
    this.router.navigateByUrl('sample-module/sample-component')
  }
}
