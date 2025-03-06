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
      name: new FormControl('', [Validators.required]),
      description: new FormControl (''),
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }
}



