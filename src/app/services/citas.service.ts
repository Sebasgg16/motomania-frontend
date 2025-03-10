import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService{

  constructor( private http: HttpClient ) { }

  createCitas( newCitas: any ) {

    const token = localStorage.getItem( "token" );
    const headers = new HttpHeaders().set( "x-Token", token! );
    return this.http.post( "http://localhost:3000/api/citas", newCitas, { headers} );
  }
}