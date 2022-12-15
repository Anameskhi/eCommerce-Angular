import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagerRoutingModule } from './content-manager-routing.module';
import {  ProductManagerComponent } from './product-manager/product-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddEditComponent } from './product-manager/components/product-add-edit/product-add-edit.component';


@NgModule({
  declarations: [
    ProductManagerComponent,
    ProductAddEditComponent
  ],
  imports: [
    CommonModule,
    ContentManagerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContentManagerModule { }
