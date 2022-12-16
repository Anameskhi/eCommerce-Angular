import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { ReactiveFormsModule } from '@angular/forms';

const categoryRotes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'add',
    component: CategoryAddEditComponent
  },
  {
    path: 'edit/:id',
    component: CategoryAddEditComponent
  }
]
@NgModule({
  declarations: [
    CategoryAddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(categoryRotes)
  ]
})
export class CategoriesModule { }
