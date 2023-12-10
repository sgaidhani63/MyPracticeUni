import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  
   url ="http://localhost:3000";
  ownerName: any;
  recordById: any;
  id: any;
  constructor(private httpClient: HttpClient) { }

  postApiCall(endPoint: any, formData: any) {
    // http://localhost:3000/owner Declare on URL object
    let url = this .url  + "/" + endPoint;
    return this.httpClient.post(url, formData)

  }
  getApiCall(endPoint: any){
    let url = this.url + "/" + endPoint;
   return this.httpClient.get(url);

  }
  patchApiCall(endpoint:any, id: any ,formData : any) {
    let url = this.url + "/" + endpoint + "/"+ id;
    return this.httpClient.patch(url,formData);
  }
  deleteApiCall(endpoint: any ,id : any) {
    let url = this.url + "/" + endpoint + "/"+ id;
    return this.httpClient.delete(url);
    }
}
