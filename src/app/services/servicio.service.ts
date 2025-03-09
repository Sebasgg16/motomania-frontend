import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http: HttpClient ) { }

  createServicio( newServicio: any ) {

    const token = localStorage.getItem( "token" );
    const headers = new HttpHeaders().set( "x-Token", token! );
    return this.http.post( "http://localhost:3000/api/services", newServicio, { headers} );
  }
}
