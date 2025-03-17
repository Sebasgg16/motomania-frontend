import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-crear-category',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-category.component.html',
  styleUrl: './crear-category.component.css'
})
export class CrearCategoryComponent {
  formData!:FormGroup
  constructor(private categoryService: CategoryService){
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl (''),
    })

  }
  onSubmit(){
    const inputData = this.formData.value
     if(this.formData.valid){
       console.log(inputData)
 
 
       this.categoryService.createCategory(inputData).subscribe({
         next: (data)=>{
           console.log(data);
         },
         error:(err)=>{
           console.error(err)
         },
         complete: ()=>{
           this.formData.reset()
         }
       });
     }
    
  }
}





