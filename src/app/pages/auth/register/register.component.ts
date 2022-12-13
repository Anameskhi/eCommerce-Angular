import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  get getFirstName(){
    return this.form.get('firstName')
  }
  get getEmail(){
    return this.form.get('email')
  }
  get getPassword(){
    return this.form.get('password')
  }
  get getConfirmPassword(){
    return this.form.get('confirmPassword')
  }

  form = new FormGroup({

    
    firstName: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required, 
      Validators.email]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    confirmPassword: new FormControl('',[Validators.required])
  })

  passwordMatched(){
    return this.form.get('password')?.value === this.form.get('confirmPassword')?.value

  }

  constructor() { }

  ngOnInit(): void {


  }

  submit(){
    console.log(this.form.value);   
     this.form.markAllAsTouched();

    if(this.form.invalid)return;
  


    this.form.reset()
  }
}
