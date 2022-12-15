import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-content-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]> = this.productsService.getProducts()
  constructor(
    private productsService: ProductsService
  ) { }
  sub$ = new Subject()

  ngOnInit(): void {
  }
  
  edit(id: string){
  }

  delete(id: string){
    this.productsService.delete(id)
    .pipe(takeUntil(this.sub$))
    .subscribe(() => {
      this.products$ = this.productsService.getProducts()
    })
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
