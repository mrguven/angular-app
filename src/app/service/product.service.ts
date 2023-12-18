import { HttpClient, HttpClientModule, HttpRequest } from "@angular/common/http";
import { Products } from "../model/products";
import { Observable } from "rxjs";
import { Injectable, NgModule } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts(searchedProduct: string): Observable<Products> {
        return this.http.get<Products>(`https://dummyjson.com/products/search?q=${searchedProduct}`)
    }
}