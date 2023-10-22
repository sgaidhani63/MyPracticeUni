import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApplication';

  constructor (public router: Router){
  }
  RegForm()
  {
    this.router.navigateByUrl('sample-module/sample-component')
  }
}
