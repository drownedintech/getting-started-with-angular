import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public amountInBasket: number = 0;

  public handleAddedToBasket(currentAmount: number): void {
    this.amountInBasket = currentAmount;
  }
}
