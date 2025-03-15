import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioService } from '../../../services/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '../../../interfaces/response';
import { Servicio } from '../../../interfaces/servicio';

@Component({
  selector: 'app-editar-servicio',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './editar-servicio.component.html',
  styleUrl: './editar-servicio.component.css'
})
export class EditarServicioComponent {
  formData!:FormGroup
  servicioId!: string;


  constructor(
    private servicioService: ServicioService,
    private router: Router,
    private route: ActivatedRoute
  ){
    console.log('%c constructor: Se ejecuta cuando Angular instancia el componente.', 'color: blue');
    this.formData = new FormGroup({
      urlImagen: new FormControl ('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl ('', [Validators.required]),
    })

  }
  ngOnInit() {
    this.getRouteId();
    this.loadFormData( this.servicioId );
  }


  private getRouteId () {
    this.route.paramMap.subscribe( params => {
      this.servicioId = params.get( 'id' ) ?? '';
      console.log('ID de la categoría:', this.servicioId );
    });
  }

  private loadFormData( categoryId: string ) {
    if ( categoryId ) {

      this.servicioService.getserviceById( categoryId ).subscribe({
        next: ( data: Response<Servicio> ) => {
          console.log( data );

          this.formData.patchValue({
            name: data?.data?.name,
            description: data?.data?.description,
            urlImage: data?.data?.urlimage,
          });
        },
        error: (error) => {
          console.error( error );
        }
      });
    }
  }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );   

      this.servicioService.updateserviceById( this.servicioId, inputData ).subscribe({
        next: ( data ) => {
          console.log( data );
          console.log( 'Update categories successfully' );
          this.router.navigate([ 'dashboard','products' ]);
        },
        error: ( errors ) => {
          console.log( errors );
        },
        complete: () => {
          this.formData.reset();
        }
      });
    }

  }
}