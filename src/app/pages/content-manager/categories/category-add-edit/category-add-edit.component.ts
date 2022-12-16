import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss']
})
export class CategoryAddEditComponent implements OnInit,OnDestroy {
  
  get getCategoryName(){
    return this.form.get('categoryName')
  }
  

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    categoryName: new FormControl('',Validators.required),
    
  })

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  sub$ = new Subject()
  categoryId: string | undefined

  ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.sub$))
    .subscribe(params => {
      if(params['id']){
        this.categoryId = params['id']
        this.categoriesService.getById(params['id']).subscribe(category => {
          this.form.patchValue(category)
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
      this.categoriesService.update(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe(()=>{
        this.router.navigate(['/content-manager/categories'])
      })
    } else {
    this.categoriesService.create(this.form.value)
    .subscribe(()=>{
      this.router.navigate(['/content-manager/categories'])
    })
  }
}

}
