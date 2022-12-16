import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/core/interfaces/cateory';

import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories$: Observable<Category[]> = this.categoriesService.getCategories()
  constructor(
    private categoriesService: CategoriesService
  ) { }
  sub$ = new Subject()

  ngOnInit(): void {
  }
  
  edit(id: string){
  }

  delete(id: string){
    this.categoriesService.delete(id)
    .pipe(takeUntil(this.sub$))
    .subscribe(() => {
      this.categories$ = this.categoriesService.getCategories()
    })
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}

