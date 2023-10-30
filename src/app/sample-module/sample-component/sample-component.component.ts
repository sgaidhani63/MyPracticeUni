import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent {

  sampleComponanet!: FormGroup;
  constructor( public fb : FormBuilder){}

  ngOnInit(){
    this.formdata();
  }

  formdata() {
    this.sampleComponanet = this.fb.group({
      userName: ['', [Validators.maxLength(7), Validators.minLength(3), Validators.pattern('[a-zA-Z],+')]]
    })
  }
  submit() {

  }

}


