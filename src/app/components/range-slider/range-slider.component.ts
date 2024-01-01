import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports: [MatSliderModule,MatInputModule,CommonModule],
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.css'
})
export class RangeSliderComponent {
  constructor(private elementRef: ElementRef){
     lowestPrice:ElementRef
     
  }
  @Output() 
  LowestPrice: EventEmitter<string>=new EventEmitter<string>;

  HighestPrice:string='';


  getLowPrice(event:string){
  console.log(event);
  console.log('hello');
  
  this.LowestPrice.emit(event);
}
 
getHighPrice(pr:string){
  console.log(pr);
  this.HighestPrice=pr;
}

}
