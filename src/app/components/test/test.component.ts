import { Component } from '@angular/core';
import { Products } from '../../model/products';
import { SearchFormComponent } from '../search-form/search-form.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ SearchFormComponent,ProductsComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  products:Products = {} as Products
  getProductsInput(product:Products){
console.log(product);
this.products=product
  }
}
