import { Component } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-desc',
  standalone: true,
  imports: [],
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent {
  product: Product = new Product();
  
  displayProduct() {
    return this.product.allImages
      .map(img => 
        `<div class="picture">
          <img class="img" src="${img}" alt="Product Image">
        </div>`
      ).join("");
  }
}
