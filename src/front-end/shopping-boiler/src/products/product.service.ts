import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Price {
  value: number;
  currency: string;
}

export interface Product {
  id?: number;
  code: string;
  name: string;
  price: Price;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'http://localhost:5271/api/v1/products';

  private http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }
}