import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services';
import { PasswordValidate } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  // get getFirstName(){
  //   return this.form.get('firstName')
  // }
  get getEmail(){
    return this.form.get('email')
  }
  get getPassword(){
    return this.form.get('password')
  }
  get getConfirmPassword(){
    return this.form.get('confirmPassword')
  }
   

  form: FormGroup= new FormGroup({

    
    // firstName: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required, 
      Validators.email]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    confirmPassword: new FormControl('',Validators.required)
  },{validators: PasswordValidate.passwordMatch})

  
  sub$ = new Subject()
  errorMessage?: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  submit(){
    console.log(this.form.value);   
     this.form.markAllAsTouched();

    if(this.form.invalid)return;
  
    this.authService.signUp(this.form.value)
    .pipe(takeUntil(this.sub$))
    .subscribe({
      next: res => {
        if(res){
          this.router.navigate(['/'])
        }
      },
      error: ({error}) => {
       
    
           this.errorMessage = error.error.message
        
      }

    })

    // this.form.reset()
  }
}
