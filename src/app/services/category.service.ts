import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private token: string;
  private headers: HttpHeaders;

  constructor( private http: HttpClient ) {
    this.token = localStorage.getItem( 'token' ) ?? '';
    console.log( this.token );
    this.headers = new HttpHeaders().set( 'X-Token', this.token! );
  }

  getCategories() : Observable<Response<Category[]>> {
    return this.http.get<Response<Category[]>>( 'http://3.133.143.218:3004/api/categorys' );
  }

  createCategory( newCategory: Category ) : Observable<Response<Category>> {
    return this.http.post<Response<Category>>( 'http://3.133.143.218:3004/api/categorys', newCategory, { headers: this.headers } );
  }

  deleteCategoryById( id: string ) : Observable<Response<Category>> {
    return this.http.delete<Response<Category>>( `http://3.133.143.218:3004/api/categorys/${ id }`, { headers: this.headers } );
  }

  getCategoryById( id: string ) : Observable<Response<Category>> {
    return this.http.get<Response<Category>>( `http://3.133.143.218:3004/api/categorys/${ id }` );
  }

  updateCategoryById( id: string, updatedCategory: any ) {
    return this.http.patch( `http://3.133.143.218:3004/api/categorys/${ id }`, updatedCategory, { headers: this.headers } )
  }
}
