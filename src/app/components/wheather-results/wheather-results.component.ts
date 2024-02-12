import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wheather-results',
  standalone: true,
  imports: [],
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

  



}
