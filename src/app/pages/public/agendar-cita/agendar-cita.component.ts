import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CitasService } from '../../../services/citas.service';


@Component({
  selector: 'app-agendar-cita',
  imports: [ReactiveFormsModule],
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent {
  formData!:FormGroup
  constructor(private citasService: CitasService){
    this.formData = new FormGroup({
       name: new FormControl('', [Validators.required]),
       description: new FormControl('', [Validators.required]),

    })

  }
  onSubmit(){
    const inputData = this.formData.value
     if(this.formData.valid){
       console.log(inputData)
 
 
       this.citasService.createCitas(inputData).subscribe({
         next: (data)=>{
           console.log(data)
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

