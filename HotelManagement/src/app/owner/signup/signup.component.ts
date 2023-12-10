import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/CommonScreens/api-call.service';


  @Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
signupForm!: FormGroup;
showWorning: boolean = true;
gender: boolean = false;
showpass = false;
endPoint: string ="owner" ;
constructor(private fb: FormBuilder,private apiCallService: ApiCallService,
  private router: Router) { }
  
ngOnInit() {
  this.formDetails()
}
    formDetails() {
      this.signupForm = this.fb.group({
        firstName: ['', Validators.required],
        userName: ['',Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}@g(oole)?mail\.com$/)] ],
        mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
        panNumber: ['',[Validators.required]],
        gender: ['male', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]]
      })
    }
    showPassword() {
      this.showpass = !this.showpass
    }
    submit() {
      this.apiCallService.postApiCall(this.endPoint,this.signupForm.value).subscribe(res=>{})
      this.router.navigateByUrl('/owner/ownersuccess');
    }
    hideHint() {
      this.showWorning = !this.showWorning;
    }
  

}

