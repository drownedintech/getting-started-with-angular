import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-to-basket',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss']
})
export class AddToBasketComponent {

}
