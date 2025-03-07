import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar-cita',
  imports: [ReactiveFormsModule],
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent {
  formData!:FormGroup
  constructor(){
    this.formData = new FormGroup({
       name: new FormControl('', [Validators.required]),
       description: new FormControl('', [Validators.required]),
      
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }

}

