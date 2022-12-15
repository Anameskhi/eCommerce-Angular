import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productsService: ProductsService 
  ) { }
products$: Observable<Product[]> = this.productsService.getProducts()
  ngOnInit(): void {
  }

} 

