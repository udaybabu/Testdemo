import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['Sammy',[Validators.required,Validators.minLength(6)]],
      email: [''],
      message: ['']
    });
  }
  onSubmit(form:FormGroup){

  }

}
