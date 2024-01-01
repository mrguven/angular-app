import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports: [MatSliderModule,MatInputModule],
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.css'
})
export class RangeSliderComponent {
  constructor(private elementRef: ElementRef){
     lowestPrice:ElementRef
     
  }
  
  LowestPrice:string='';

  HighestPrice:string='';


  getLowPrice(event:string){
  console.log(event);
  console.log('hello');
  this.LowestPrice=event;
}
 
getHighPrice(pr:string){
  console.log(pr);
  this.HighestPrice=pr;
}

}
