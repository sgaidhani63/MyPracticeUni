import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent {

  sampleComponanet!: FormGroup;
  age = 45;
  todaydate = new Date();
  userAge: any;
  //isGenderSelected: boolean = false;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formdata();
    console.log(this.todaydate,);
  }

  formdata() {
    this.sampleComponanet = this.fb.group({
      userName: ['', [Validators.maxLength(10), Validators.minLength(3), Validators.pattern('[a-zA-Z ]+')]],
      LastName: ['', [Validators.maxLength(10), Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
      DOB: ['', [Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/), Validators.pattern(this.datePattern)]]
      //  DOB:['',[Validators.pattern(this.datePattern)]],

    })
  }
  
  submit() {
    // let gender = this.sampleComponanet.value.gender
    // if(gender){
    //   console.log('f data',this.sampleComponanet.value);
    // }
    // else{
    //   this.isGenderSelected = true;
    //   return
    console.log('f data', this.sampleComponanet.value);
  }
  calYear() {
    let dobFieldValue = this.sampleComponanet.value.dob;
    let todayFullYear = this.todaydate.getFullYear();
    let splitedDate = dobFieldValue?.split('/');
    let usersFullYear = splitedDate[2];
    this.userAge = todayFullYear - usersFullYear;
  }

}


