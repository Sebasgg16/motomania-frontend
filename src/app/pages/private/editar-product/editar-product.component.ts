import { Component, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-product',
  imports: [ReactiveFormsModule],
  templateUrl: './editar-product.component.html',
  styleUrl: './editar-product.component.css'
})
export class EditarProductComponent {

  formData!:FormGroup
  categorias=[
    {_id:'1',name:'motos'},
    {_id:'2',name:'aceites'},
    {_id:'3',name:'carros'},
    {_id:'4',name:'llantas'}
  ]

  constructor(){
    this.formData = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl ( 0),
      stock: new FormControl ( 1),
      urlImage: new FormControl(''),
      category: new FormControl(''),
      state: new FormControl (true),
    })

  }
  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
    }
    this.formData.reset() 
    
  }

}

