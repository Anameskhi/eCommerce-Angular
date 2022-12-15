import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-content-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  products$: Observable<Product[]> = this.productsService.getProducts()
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }


}
