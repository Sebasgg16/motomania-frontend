import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products: Product[] = []
  isloading:boolean=true
  constructor( private productService: ProductService ) {}

    ngOnInit() {
      this.productService.getProducts().subscribe({
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
  }
