import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { RangeSliderComponent } from '../range-slider/range-slider.component';
import { Products } from '../../model/products';
import { fromFetch } from 'rxjs/fetch';
import { map } from 'rxjs';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from '../../service/service.module';



@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatBottomSheetModule,RangeSliderComponent, HttpClientModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  @Output()
  results: EventEmitter<Products>= new EventEmitter<Products>()
   
  constructor(private _bottomSheet: MatBottomSheet,
    private productService: ProductService) {}
   
  
    
 submitSearch( searchedProduct:string) {
  console.log('dfgdgf');

  
  this.productService.getProducts(searchedProduct).subscribe(res => this.results.emit(res)  )
 }

}
