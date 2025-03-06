import { Component, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-repuestos',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-repuestos.component.html',
  styleUrl: './crear-repuestos.component.css'
})
export class CrearRepuestosComponent {
  formData!:FormGroup
  categorias=[
    {_id:'1',name:'motos'},
    {_id:'2',name:'aceites'},
    {_id:'3',name:'carros'},
    {_id:'4',name:'llantas'}
  ]

  constructor(){
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl ( 0, [Validators.required]),
      stock: new FormControl ( 1, [Validators.required]),
      urlImage: new FormControl('', [Validators.required]),
      categorias: new FormControl('', [Validators.required]),
      state: new FormControl (true, [Validators.required]),
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }

}
