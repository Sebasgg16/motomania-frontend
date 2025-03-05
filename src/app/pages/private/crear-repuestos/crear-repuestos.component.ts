import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-repuestos',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-repuestos.component.html',
  styleUrl: './crear-repuestos.component.css'
})
export class CrearRepuestosComponent {
  formData!:FormGroup

  constructor(){
    this.formData = new FormGroup({
      agregarprecio: new FormControl('', [Validators.required]),
      agregarprudcto: new FormControl('', [Validators.required]),
      agregardescripcion: new FormControl ('', [Validators.required]),
      agregarimagen: new FormControl ('', [Validators.required])
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }

}
