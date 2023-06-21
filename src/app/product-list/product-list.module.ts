import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ProductImageComponent } from '../shared/product-image/product-image.component';
import { AddToBasketComponent } from '../shared/add-to-basket/add-to-basket.component';
import { ProductDescriptionComponent } from '../shared/product-description/product-description.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatListModule,
    MatIconModule,
    ProductImageComponent,
    ProductDescriptionComponent,
    AddToBasketComponent
  ]
})
export class ProductListModule { }
