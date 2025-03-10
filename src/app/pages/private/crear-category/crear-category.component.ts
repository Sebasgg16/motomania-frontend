import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-category',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-category.component.html',
  styleUrl: './crear-category.component.css'
})
export class CrearCategoryComponent {
  formData!:FormGroup
  constructor(){
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl (''),
    })

  }
  onSubmit() {
    const inputData = this.formData.value
    if (this.formData.valid) {
      console.log(inputData)
      
      

    }
    this.formData.reset
  }
}



