import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  createCategorys(){
      const token = localStorage.getItem ('token')
      const headers =new HttpHeaders().set('X-Token', token!)
      return this.http.post('http://localhost:3000/api/categorys',{headers})
    }

  getCategories() {
    return this.http.get( 'http://localhost:3000/api/categorys' );
  }
}
