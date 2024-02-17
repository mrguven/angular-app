import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-wheather-results',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './wheather-results.component.html',
  styleUrl: './wheather-results.component.css'
})
export class WheatherResultsComponent {

generatedNumber!:Number;

getNumber(){
  let obser = new Observable<Number> (el=> el.next(Math.random()))

obser.subscribe(result=>this.generatedNumber=result)
console.log(this.generatedNumber);
}

changeNumber(){
let newNumber= +this.generatedNumber * 10000000000000000
this.generatedNumber=newNumber
}

  getCity(cityName:string){
    
  }



}
