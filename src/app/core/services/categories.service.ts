import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/cateory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  fbDbUrl?:string
  documentName: string = 'categories'
  constructor(
    private http:HttpClient
  ) { 
    this.fbDbUrl = environment.fbDbUrl
  }

  getCategories():Observable<Category[]> {
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

  create(category: Category): Observable<Category>{
    return this.http.post(`${this.fbDbUrl}/${this.documentName}.json`,category)
    .pipe(
      map((data: any)=> {
        return {...category, id: data.name}
      })
    )
  }

  update(category: Category): Observable<Category>{
    return this.http.patch(`${this.fbDbUrl}/${this.documentName}/${category.id}.json`,category)
    .pipe(
      map(()=> {
        return category
      })
    )
  }

  delete(categoryId: string): Observable<void>{
    return this.http.delete<void>(`${this.fbDbUrl}/${this.documentName}/${categoryId}.json`)
  }

  getById(categoryId: string):Observable<Category>{
    return this.http.get<Category>(`${this.fbDbUrl}/${this.documentName}/${categoryId}.json`)
    .pipe(
      map((category: Category)=>{
        return{...category, id:categoryId}
      })
    )
  }
}