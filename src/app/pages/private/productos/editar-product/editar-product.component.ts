import { Component, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/products.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../../../../interfaces/product';
import { Response } from '../../../../interfaces/response';
import { state } from '@angular/animations';
import { Category } from '../../../../interfaces/category';

@Component({
  selector: 'app-editar-product',
  imports: [ReactiveFormsModule],
  templateUrl: './editar-product.component.html',
  styleUrl: './editar-product.component.css'
})
export class EditarProductComponent {
  categorias: Category[]=[]
  formData!:FormGroup
  servicioId!: string;


  constructor(
    private productService: ProductService,
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

      this.productService.getProductById( categoryId ).subscribe({
        next: ( data: Response<Product> ) => {
          console.log( data );

          this.formData.patchValue({
            name: data?.data?.name,
            description: data?.data?.description,
            price: data?.data?.price,
            stock: data?.data?.stock,
            urlImage: data?.data?.urlImage,
            category: data?.data?.category,
            state: data?.data?.state
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

      this.productService.updateProductById( this.servicioId, inputData ).subscribe({
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