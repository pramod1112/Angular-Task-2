import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  myForm : FormGroup | any;
  constructor() { }
  
  // showContact= false;
  contactForm = ['Phone','Email'];
  currentSelectedContact : string | any;
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      contact : new FormControl('',Validators.required),
      phoneNumber : new FormControl('',[Validators.required,Validators.minLength(10)]),
      email : new FormControl('',[Validators.required,Validators.email]),
    })
  }

  submit(){
    console.log(this.myForm.value)
  }
  selectOpt(eve : any){
    // console.log(eve.target.value)
    let contInfo =eve.target.value;
    this.currentSelectedContact = contInfo;
  }
}
