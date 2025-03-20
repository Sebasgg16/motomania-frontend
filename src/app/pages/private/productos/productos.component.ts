import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products: Product[] = []
  isloading:boolean=true
  constructor( private productService: ProductService ) {}

    ngOnInit() {
      this.productService.getproducts().subscribe({
        next: (data) => {
          console.log(data);
          console.log( "Successfully obtains productos");

          this.products = data.data ?? [];
        },
        error: (error ) => {
          console.error(error);
          this.isloading = false
        },
        complete: () => {
          this.isloading = false
        }
      });
    }

    onRemove( serviceId : string ) {
  
      if( ! serviceId ) {
        console.error( 'Invalid service ID' );
        return;
      }
  
      this.productService.deleteProductById( serviceId ).subscribe({
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
