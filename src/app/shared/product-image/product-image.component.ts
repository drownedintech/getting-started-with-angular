import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {
  @Input({
    required: true,
    transform: (value: string | undefined) => value ?? '/assets/images/image-placeholder.png'
  })
  public imageUrl: string | undefined;
}
