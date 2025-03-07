  import { Component, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-servicio',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.css'
})
export class CrearServicioComponent {
  formData!:FormGroup

  constructor(){
    this.formData = new FormGroup({
      urlImagen: new FormControl('',[Validators.required]),
      price: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.required]),
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
