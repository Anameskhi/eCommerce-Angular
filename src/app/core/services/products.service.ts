import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  fbDbUrl?:string
  documentName: string = 'products'
  constructor(
    private http:HttpClient
  ) { 
    this.fbDbUrl = environment.fbDbUrl
  }

  getProducts():Observable<Product[]> {
    return this.http.get(`${this.fbDbUrl}/${this.documentName}.json`)
    .pipe(
      map((data: any )=> {
        if(!data)return[]
        return Object.keys(data).map(key => ({
          ...data[key],
          id:key
        }))
      })
    )
  }

  create(product: Product): Observable<Product>{
    return this.http.post(`${this.fbDbUrl}/${this.documentName}.json`,product)
    .pipe(
      map((data: any)=> {
        return {...product, id: data.name}
      })
    )
  }

  update(product: Product): Observable<Product>{
    return this.http.patch(`${this.fbDbUrl}/${this.documentName}/${product.id}.json`,product)
    .pipe(
      map(()=> {
        return product
      })
    )
  }

  delete(product: Product): Observable<void>{
    return this.http.delete<void>(`${this.fbDbUrl}/${this.documentName}/${product.id}.json`)
  }
}