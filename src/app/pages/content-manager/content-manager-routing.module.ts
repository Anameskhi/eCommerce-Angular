import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddEditComponent } from './product-manager/components/product-add-edit/product-add-edit.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/content-manager/product-manager',
    pathMatch: 'full'
  },
  {
    path: 'product-manager',
    component: ProductManagerComponent
  },
  {
    path: 'product/add',
    component: ProductAddEditComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagerRoutingModule { }