import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  getlimitProduct():Observable<Products[]>{
  return this.http.get<Products[]>("https://dummyjson.com/products?limit=10");
  }
  getAllProduct():Observable<Products[]>{
    return this.http.get<Products[]>("https://dummyjson.com/products");
  }

}
