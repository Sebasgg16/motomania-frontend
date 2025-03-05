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
      agregarprecio: new FormControl('', [Validators.required]),
      agregarservicio: new FormControl('', [Validators.required]),
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
