import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  
  get getTitle(){
    return this.form.get('title')
  }
  get getDescription(){
    return this.form.get('description')
  }
  get getPrice(){
    return this.form.get('price')
  }
  get getImage(){
    return this.form.get('image')
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required)
  })

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value)
    this.form.markAllAsTouched()
    if(this.form.invalid)return;

    this.productsService.create(this.form.value)
    .subscribe(()=>{
      this.router.navigate(['content-manager/product-manager'])
    })
  }
}
