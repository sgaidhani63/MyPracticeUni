import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/CommonScreens/api-call.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css'],
})
 
export class OwnerLoginComponent {
loginForm!:FormGroup;
showWorning=true; 
 showPass:boolean=false; 
 ownerData:any;
 showpass = false;

constructor(private fb:FormBuilder,private Router:Router,private apiCallService: ApiCallService,private toastr: ToastrService ){}

ngOnInit(){ 
  this.formDetails(); 
  this.getOwnerData();
 
 } 
 
 getOwnerData(){
  let endPoint ="owner";
  this.apiCallService.getApiCall(endPoint).subscribe(res=>{
   this.ownerData = res;
   console.log("ownerdata",this.ownerData);
  
 })

}
  formDetails() { 
    this.loginForm=this.fb.group({ 
      UserName :["",[Validators.required,Validators.maxLength(10),Validators.minLength(5)]], 
      password:["",[Validators.required,Validators.required,Validators.minLength(5)]]
         }) 
     } 

    showPassword() {
      this.showpass = !this.showpass
    }
    
login(){
  
   if(this.ownerData){
   var matchedObj= this.ownerData.find((item:any)=>{
   if(item.UserName == this.loginForm.value.userName && item.password == this.loginForm.value.password){
      return item;
    }
    
    })
  }
  if(matchedObj){
    this.apiCallService.ownerName = this.loginForm.value.UserName;
    console.log("data",this.apiCallService.ownerName);
    
    this.Router.navigateByUrl('owner/ownersuccess');
  }
  else{
    this.Router.navigateByUrl('owner');
  
    this.toastr.success('User name and Password Does not match ');
  }

}

}
