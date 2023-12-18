import { Component, Input } from '@angular/core';
import { Products } from '../../model/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input()
  results: Products = {} as Products

}
