import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {

  
  myForm : FormGroup | any;
  constructor() { }
  
  showContact= false;
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
    // console.log(eve)
    let contInfo =eve;
    this.currentSelectedContact = contInfo;
  }
}
