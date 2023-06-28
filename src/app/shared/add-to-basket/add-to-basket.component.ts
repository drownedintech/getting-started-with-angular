import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-to-basket',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss']
})
export class AddToBasketComponent {
  @Output()
  public itemAdded = new EventEmitter<number>();

  private currentAmount: number = 0;

  public addItemToBasket(): void {
    this.itemAdded.emit(++this.currentAmount);
  }
}
