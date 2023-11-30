import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.css']
})
export class HotelRegistrationComponent {
  newHoteRegister!:FormGroup 
  
  
  constructor(private fb:FormBuilder ,
    //private apiCallService:ApiCallService,
    private router:Router){} 
ngOnInit(){ 
  this.formDetails() 
} 
 
formDetails(){ 
  this.newHoteRegister=this.fb.group({ 
    ownerName:['',Validators.required], 
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelName:['',Validators.required], 
    hotelAdress:['',Validators.required], 
    hotelNumber:['',[Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelMenu:['',Validators.required], 
    rooms:['',Validators.required], 
    pass: ['', [Validators.required, Validators.minLength(8)]], 
    checkBox:['',Validators.required] 
  }) 
} 
 
 
newHotel(){ 
  console.log(this.newHoteRegister.value); 
  // this.apiCallService.postApiCall(this.newHoteRegister.value).subscribe(res=>{ 
  //   console.log("responce::>>",res); 
  //   if(res){ 
  //     alert('Data submitted Successfuly...!!'); 
  //     this.router.navigateByUrl('/ownerMod/ownerSucces'); 
  //   } 
  // }) 
} 
}

