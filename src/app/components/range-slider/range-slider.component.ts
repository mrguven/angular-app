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

  newLowestPrice:string="0";
newHighestPrice:string="3000";
  @Output() 
  LowestPrice: EventEmitter<string>=new EventEmitter<string>;
  @Output() 
  HighestPrice:EventEmitter<string>= new EventEmitter<string>;


  getLowPrice(event:string){
  console.log(event);
  console.log('hello');
  
  this.LowestPrice.emit(event);
  this.newLowestPrice=event;
}
 
getHighPrice(pr:string){
  console.log(pr);
  this.HighestPrice.emit(pr);
this.newHighestPrice=pr;
}




}
