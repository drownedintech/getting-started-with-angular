import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductImageComponent } from '../shared/product-image/product-image.component';
import { ProductDescriptionComponent } from '../shared/product-description/product-description.component';
import { AddToBasketComponent } from '../shared/add-to-basket/add-to-basket.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductReviewsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ProductImageComponent,
    ProductDescriptionComponent,
    AddToBasketComponent
  ]
})
export class ProductModule { }
