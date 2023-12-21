import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './service/service.module';
import { Products } from './model/products';
import { ProductsComponent } from './components/products/products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductsComponent,
     MatCardModule, MatFormFieldModule, MatInputModule,
     SearchFormComponent, ServiceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  products:Products = {} as Products
  getProducts(product:Products){
console.log(product);
this.products=product

}

 


  title = 'angular-app';




}
