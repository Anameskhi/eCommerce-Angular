import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from 'src/app/core/services';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit,OnDestroy {
  
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
    private router: Router,
    private route: ActivatedRoute
  ) { }
  sub$ = new Subject()
  productId: string | undefined

  ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.sub$))
    .subscribe(params => {
      if(params['id']){
        this.productId = params['id']
        this.productsService.getById(params['id']).subscribe(product => {
          this.form.patchValue(product)
        })
      }
    })
  
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  submit(){
    console.log(this.form.value)
    this.form.markAllAsTouched()
    if(this.form.invalid)return;
    
    if(this.form.value.id){
      this.productsService.update(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe(()=>{
        this.router.navigate(['/content-manager/products'])
      })
    } else {
    this.productsService.create(this.form.value)
    .subscribe(()=>{
      this.router.navigate(['/content-manager/products'])
    })
  }
}

}
