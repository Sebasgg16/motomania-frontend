import { Component, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-servicio',
  imports: [ReactiveFormsModule],
  templateUrl: './editar-servicio.component.html',
  styleUrl: './editar-servicio.component.css'
})
export class EditarServicioComponent {
  formData!:FormGroup

  constructor(){
    this.formData = new FormGroup({
      urlImagen: new FormControl ('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl ('', [Validators.required]),
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }

}
