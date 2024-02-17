import { HttpClient, HttpClientModule, HttpRequest } from "@angular/common/http";
import { Products } from "../model/products";
import { Observable } from "rxjs";
import { Injectable, NgModule } from "@angular/core";
import { Weather } from "../model/weather";

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts(searchedProduct: string): Observable<Products> {
        return this.http.get<Products>(`https://dummyjson.com/products/search?q=${searchedProduct}`)
    }



getWeather(lat:number,lon:number):Observable<Weather>{
    return this.http.get<Weather>(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=e5b86555a27045879223769822344424&include=minutely`)
}

}


