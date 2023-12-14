import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.css'
})
export class RangeSliderComponent {

}
