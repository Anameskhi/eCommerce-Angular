import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductItemComponent } from 'src/app/modules/product-item/product-item.component';
import { ProductItemModule } from 'src/app/modules/product-item/product-item.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductItemModule
  ]
})
export class HomeModule { }
