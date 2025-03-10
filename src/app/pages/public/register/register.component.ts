import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData!: FormGroup 
  constructor(private authService: AuthService){
    this.formData= new FormGroup({
      name: new FormControl('',Validators.required),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit(){
    const inputData = this.formData.value
    if(this.formData.valid){
      console.log(inputData);
      this.authService.registerUser(inputData).subscribe({
        next:(data)=> {
          console.log(data)
        },
        error:(err)=> {
          console.log(err)
        },
        complete:()=>{
          console.log('registro exitoso')
          this.formData.reset()
        }
      })
    }
    } 
  }


