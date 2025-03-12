import { Component, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioService } from '../../../services/servicio.service';

@Component({
  selector: 'app-crear-servicio',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.css'
})
export class CrearServicioComponent {
  formData!:FormGroup

  constructor( private servicioService: ServicioService){
    this.formData = new FormGroup({
      urlImagen: new FormControl('',[Validators.required]),
      price: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl ('', [Validators.required]),
    })

  }
  onSubmit(){
    const inputData = this.formData.value
     if(this.formData.valid){
       console.log(inputData)
 
 
       this.servicioService.createServicio(inputData).subscribe({
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
