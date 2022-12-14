import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagerRoutingModule } from './content-manager-routing.module';
import {  ProductManagerComponent } from './product-manager/product-manager.component';


@NgModule({
  declarations: [
    ProductManagerComponent
  ],
  imports: [
    CommonModule,
    ContentManagerRoutingModule
  ]
})
export class ContentManagerModule { }
