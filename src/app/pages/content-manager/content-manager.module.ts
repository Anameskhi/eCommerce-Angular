import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagerRoutingModule } from './content-manager-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { ContentManagerComponent } from './content-manager.component';


@NgModule({
  declarations: [
 
  
    CategoriesComponent,
    ContentManagerComponent
  ],
  imports: [
    CommonModule,
    ContentManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentManagerModule { }
