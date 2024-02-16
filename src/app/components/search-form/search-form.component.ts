import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { RangeSliderComponent } from '../range-slider/range-slider.component';
import { Products } from '../../model/products';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'node:console';


@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBottomSheetModule,
    RangeSliderComponent,
    HttpClientModule,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  pr: string = '';
  @Output()
  results: EventEmitter<Products> = new EventEmitter<Products>();
allResults!:Products;
errormessage:string=""
errorcon:boolean=true


  constructor(
    private _bottomSheet: MatBottomSheet,
    private productService: ProductService
  ) {}

  submitSearch(searchedProduct: string) {
    console.log('dfgdgf');
if(searchedProduct===''){
this.errormessage='*products not found'
this.errorcon=false
}

else {
  this.productService
  .getProducts(searchedProduct) // subscribe yerine pipe kullan
  .subscribe((res) => {
    this.allResults=res;
    this.results.emit(res);
    this.errorcon=true
  });
}
    

  }

  getHighestPrice(price: string) {
    const priceNmr:number = +price;
    const filteredSubProducts = this.allResults.products.
filter(product=> product.price <= priceNmr);
const filteredProducts: Products = {
  limit: this.allResults.limit,
  products: filteredSubProducts,
  skip: this.allResults.skip,
  total: this.allResults.total,
}

this.results.emit(filteredProducts);


    console.log(filteredProducts);
    
  }


    
    
}
