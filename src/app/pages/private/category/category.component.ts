import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../interfaces/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
categorias: Category[] = []
    isloading:boolean=true
    urlimage?: string;
    constructor( private categoryService: CategoryService ) {}
  
    ngOnInit() {
      this.categoryService.getCategories().subscribe({
        next: ( data ) => {
          console.log( data );
          console.log( 'Successfully obtains categories' );
  
          this.categorias = data.data ?? []; 
          console.log (this.categorias)   // Asignara una lista vacia para evitar asignar undefined
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
  
    onRemove( categoryId : string ) {
  
      if( ! categoryId ) {
        console.error( 'Invalid service ID' );
        return;
      }
  
      this.categoryService.deleteCategoryById( categoryId ).subscribe({
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