import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-categoria',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-categoria.component.html',
  styleUrl: './crear-categoria.component.css'
})
export class CrearCategoriaComponent {
  formData!:FormGroup
  constructor(){
    this.formData = new FormGroup({
      agregarCategoria: new FormControl('', [Validators.required]),
      agregardescripcion: new FormControl ('', [Validators.required]),
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }
}



