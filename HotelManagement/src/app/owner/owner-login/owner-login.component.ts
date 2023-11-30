import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




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

constructor(private fb:FormBuilder,private Router:Router ){}

ngOnInit(){ 
  this.formDetails(); 

 
 } 
  formDetails() { 
    this.loginForm=this.fb.group({ 
      UserName :["",[Validators.required,Validators.maxLength(10),Validators.minLength(5)]], 
      password:["",[Validators.required,Validators.minLength(5)]] 
     }) 
     } 

    showPassword() {
      this.showpass = !this.showpass
    }

      
  
    
login(){
  
   if(this.ownerData){
   var matchedObj= this.ownerData.find((item:any)=>{
   if(item.userName == this.loginForm.value.userName && item.password == this.loginForm.value.password){
      return item;
    }
    
    })
  }
  if(matchedObj){
    this.Router.navigateByUrl('owner/ownerSuccess');
  }
  else{
    this.Router.navigateByUrl('owner');
  }

}

}
