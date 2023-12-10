import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/CommonScreens/api-call.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.css']
})
export class OwnersuccessComponent {
  hotelDetails: any;
  ownerName: any;
  hotelDetailsByOwner!: any[];
  headings = ["Hotel Name", "Hotel Address", "Hotel Number", "Hotel Menu", "Room", "Hotel Number", "Edit", "Delete"];
  showRecord: boolean = false;
  constructor(private router: Router, private apiCallService: ApiCallService,
  ) { }

  ngOnInit() {
    this.ownerName = this.apiCallService.ownerName;
  }


  async HotelDetails() {
    this.hotelDetailsByOwner = [];
    this.hotelDetails = await this.apiCallService.getApiCall("hotelDetails").toPromise()
    console.log("hotelDetails", this.hotelDetails);
    this.getHotelByOwner()
  }

  getHotelByOwner() {
    this.hotelDetails.forEach((element: any) => {
      console.log("owner", this.ownerName)
      if (element.ownerName == this.ownerName) {
        this.hotelDetailsByOwner.push(element)
      }
    });
    if (this.hotelDetailsByOwner.length > 0) {
      this.showRecord = true;
    }
    console.log("hotel list by owner", this.hotelDetailsByOwner);

  }


  edit(id: any) {
    let recordById:any = [];
    console.log("id", id);
    this.hotelDetails.forEach((ele:any)=>{
       if(ele.id == id) {
        recordById.push(ele)
       }
    })
    console.log("record ",recordById);    
    this.apiCallService.recordById = recordById;
    this.apiCallService.id = id;
    this.router.navigateByUrl('owner/hotelregistration')
  }
  delete(id: any) {
    this.apiCallService.deleteApiCall("hotelDetails", id).subscribe(res=>{})
    this.HotelDetails();
  }
}
