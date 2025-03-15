import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../interfaces/servicio';
import { Response } from '../interfaces/response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private token: string;
  private headers: HttpHeaders;

  constructor( private http: HttpClient ) {
    this.token = localStorage.getItem( 'token' ) ?? '';
    console.log( this.token );
    this.headers = new HttpHeaders().set( 'X-Token', this.token! );
  }
  createServicio( newServicio: Servicio ): Observable<Response<Servicio>> {

    const token = localStorage.getItem( "token" );
    const headers = new HttpHeaders().set( "x-Token", token! );
    return this.http.post <Response<Servicio>>( "http://localhost:3000/api/services", newServicio, { headers} );
  }
  getservice() : Observable<Response<Servicio[]>> {
    return this.http.get<Response<Servicio[]>>( 'http://localhost:3000/api/services' );
  }
  deleteserviceById( id: string ) : Observable<Response<Servicio>> {
    return this.http.delete<Response<Servicio>>( `http://localhost:3000/api/services/${ id }`, { headers: this.headers } );
  }
  updateserviceById( id: string, updatedservice: any ) {
    return this.http.patch( `http://localhost:3000/api/services/${ id }`, updatedservice, { headers: this.headers } )
  }
  getserviceById( id: string ) : Observable<Response<Servicio>> {
    return this.http.get<Response<Servicio>>( `http://localhost:3000/api/services/${ id }`, { headers: this.headers } );
  }


}
