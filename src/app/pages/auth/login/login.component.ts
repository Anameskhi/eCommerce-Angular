import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  get getFullName(){
    return this.form.get('firstName')
  }
  get getPassword(){
    return this.form.get('password')
  }

  form: FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value)
  }
}
