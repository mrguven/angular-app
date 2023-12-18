import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductService } from "./product.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductService],
  })
  export class ServiceModule { }