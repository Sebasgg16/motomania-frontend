import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private token: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token') ?? '';
    console.log(this.token);
    this.headers = new HttpHeaders().set('X-Token', this.token!);
  }

  createProduct(newProducts: any) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('X-Token', token!)
    return this.http.post('http://3.133.143.218:3004/api/products', newProducts, { headers })
  }
  getproducts(): Observable<Response<Product[]>> {
    return this.http.get<Response<Product[]>>('http://3.133.143.218:3004/api/products');
  }
  deleteProductById(id: string): Observable<Response<Product>> {
    return this.http.delete<Response<Product>>(`http://3.133.143.218:3004/api/products/${id}`, { headers: this.headers });
  }
  updateProductById(id: string, updateProduct: any) {
    return this.http.patch(`http://3.133.143.218:3004/api/products/${id}`, updateProduct, { headers: this.headers })
  }
  getProductById(id: string): Observable<Response<Product>> {
    return this.http.get<Response<Product>>(`http://3.133.143.218:3004/api/products/${id}`, { headers: this.headers });
  }

}