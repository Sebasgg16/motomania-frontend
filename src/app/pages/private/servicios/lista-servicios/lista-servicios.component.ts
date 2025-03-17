import { Component } from '@angular/core';
import { Servicio } from '../../../../interfaces/servicio';
import { ServicioService } from '../../../../services/servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-servicios',
  imports: [RouterLink],
  templateUrl: './lista-servicios.component.html',
  styleUrl: './lista-servicios.component.css'
})
export class ListaServiciosComponent {

   services: Servicio[] = []
    isloading:boolean=true
    urlimage?: string;
    constructor( private serviceService: ServicioService ) {}
  
    ngOnInit() {
      this.serviceService.getservice().subscribe({
        next: ( data ) => {
          console.log( data );
          console.log( 'Successfully obtains categories' );
  
          this.services = data.data ?? []; 
          console.log (this.services)   // Asignara una lista vacia para evitar asignar undefined
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
  
    onRemove( serviceId : string ) {
  
      if( ! serviceId ) {
        console.error( 'Invalid service ID' );
        return;
      }
  
      this.serviceService.deleteserviceById( serviceId ).subscribe({
        next: ( data ) => {
          console.log( data );
          console.log( 'Delete service successfully' );
  
          this.ngOnInit();    // Actualiza datos
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {}
      });
    }
}
