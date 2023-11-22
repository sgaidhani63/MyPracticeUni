import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent {

  sampleComponanet!: FormGroup;
  age = 20;
  todaydate = new Date();
  userAge: any;
  isGenderSelected: boolean = false;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  showPass = false;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formdata();
    console.log(this.todaydate,);
  }

  formdata() {
    this.sampleComponanet = this.fb.group({
      userName: ['', [Validators.maxLength(10), Validators.minLength(3), Validators.pattern('[a-zA-Z ]+')]],
      LastName: ['', [Validators.maxLength(10), Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
      // dob: ['', [Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/), Validators.pattern(this.datePattern)]]
       dob:['',[Validators.pattern(this.datePattern)]],
       cars:[],
       gender:[''],
       TC:[false,Validators.requiredTrue],
       oldField:['',this.oldWordRestriction],
        password:[]

    })
  }

  
  oldWordRestriction(inputValue: any) {
    //Old,OLD,oLd,OLd,olD....
    let inputValue1 = inputValue.value?.toLowerCase().split(' ');
    let isIncludeOld = inputValue1.includes('old');
    return isIncludeOld ? { 'oldWord': true } : null;
  }
  
  submit() {
    let gender = this.sampleComponanet.value.gender
    if(gender){
      console.log('f data',this.sampleComponanet.value);
    }
    else{
      this.isGenderSelected = true;
      return
    console.log('f data', this.sampleComponanet.value);
  }
}

  calYear(event:any){
  //  console.log('event',event.target.value);
    
    if(event.target.value.length > 9){
      let dobFieldValue = this.sampleComponanet.value.dob;
      let todayFullYear = this.todaydate.getFullYear();
      let splitedDate = dobFieldValue?.split('/');
      let usersFullYear = splitedDate[2];
      this.userAge = todayFullYear - usersFullYear;
    }
     
}
gender(){
  this.isGenderSelected = false;
}
showPassword(){
  console.log('..,.m,m');
  this.showPass = !this.showPass;
}
}

