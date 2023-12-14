import { Component } from '@angular/core';
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

}
