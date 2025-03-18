import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { subscribeOn } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

const authservice = inject (AuthService)
authservice.verifyAuthenticateUser().subscribe({
  next: (data) => { 
    console.log(data);

  },
  error: (error ) => {
    console.error(error);
  },
  complete: () => {
  }

})

  return true;
};
