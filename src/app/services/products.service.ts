import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = "https://fakestoreapi.com/products"

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
