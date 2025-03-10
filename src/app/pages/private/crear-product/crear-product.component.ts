import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-crear-product',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-product.component.html',
  styleUrl: './crear-product.component.css'
})
export class CrearProductComponent {
  formData!: FormGroup
  categories!: Array<{ _id: string; name: string; }>;
  

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService
  ) {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      stock: new FormControl(1, [Validators.required]),
      urlImage: new FormControl('', [Validators.required]),
      categorias: new FormControl('', [Validators.required]),
      state: new FormControl(true, [Validators.required]),
    })

  }
  ngOnInit() {
    this.categoryService.createCategorys().subscribe({
      next: ( data: any ) => {
        console.log( data );
        this.categories = data.data;
        console.log( 'Categories successfully obtained' );
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }
  onSubmit() {
    const inputData = this.formData.value
    if (this.formData.valid) {
      console.log(inputData)
      this.productService.createProducts(inputData).subscribe({
        next: (data) => {
          console.log(data)
          console.log( 'Product registered successfully' );
        },
        error: (err) => {
          console.error(err)
        },
        complete: () => {
          this.formData.reset()
        }
      });

    }
  }
}
