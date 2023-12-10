import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/CommonScreens/api-call.service';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.css']
})
export class HotelRegistrationComponent {
  newHoteRegister!:FormGroup 
  
  id:any;
  recordById:any;

  constructor(private fb:FormBuilder ,
    private apiCallService:ApiCallService,
    private router:Router){} 
ngOnInit(){ 
  this.id = this.apiCallService.id;
  this.recordById = this.apiCallService.recordById;
  this.formDetails() 
} 
 
formDetails(){ 
  this.newHoteRegister=this.fb.group({ 
    ownerName:[this.recordById ? this.recordById[0].ownerName : '',Validators.required], 
    mobileNumber: [this.recordById ? this.recordById[0].mobileNumber : '', [Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelName:[this.recordById ? this.recordById[0].hotelName : '',Validators.required], 
    hotelAdress:[this.recordById ? this.recordById[0].hotelAdress : '',Validators.required], 
    hotelNumber:[this.recordById ? this.recordById[0].hotelNumber : '',[Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelMenu:[this.recordById ? this.recordById[0].hotelMenu : '',Validators.required], 
    rooms:[this.recordById ? this.recordById[0].rooms : '',Validators.required], 
    pass: [this.recordById ? this.recordById[0].pass : '', [Validators.required, Validators.minLength(8)]], 
    checkBox:['',Validators.required] 
  }) 
} 
 
 
newHotel(){ 
  let endPoint = "hotelDetails";
  console.log(this.newHoteRegister.value); 
  this.apiCallService.postApiCall(endPoint,this.newHoteRegister.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
    // if(res){ 
      alert('Data submitted Successfuly...!!'); 
      this.router.navigateByUrl('/owner/ownersuccess'); 
    // } 
  }) 
} 
update(){
  this.apiCallService.patchApiCall("hotelDetails",this.id,this.newHoteRegister.value).subscribe(res=>{

})
this.router.navigateByUrl("owner/ownersuccess")
}
}

