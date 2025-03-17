import { Component } from '@angular/core';
import { ServicioService } from '../../../services/servicios.service';
import { Servicio } from '../../../interfaces/service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  services: Servicio[] = []
  isloading:boolean=true
  constructor( private serviciosService: ServicioService ) {}

  ngOnInit() {
    this.serviciosService.getservice().subscribe({
      next: ( data ) => {
        console.log( data );
        console.log( 'Successfully obtains categories' );

        this.services = data.data ?? [];    // Asignara una lista vacia para evitar asignar undefined
      },
      error: ( error ) => {
        console.error( error );
        this.isloading = false
      },
      complete: () => {
        this.isloading=false
      }
    });
  }

}
