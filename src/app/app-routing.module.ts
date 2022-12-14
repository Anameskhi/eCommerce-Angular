import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomeModule)},
      {path: 'auth',loadChildren: ()=> import('./pages/auth/auth.module').then(m=> m.AuthModule)},
      {path: 'products', loadChildren: ()=> import('./pages/products/products.module').then(m=> m.ProductsModule)},
      {path: 'cart', loadChildren: ()=> import('./cart/cart.module').then(m=> m.CartModule)},
      {path: 'content-manager', loadChildren: ()=> import('./pages/content-manager/content-manager.module').then(m=> m.ContentManagerModule)},

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
