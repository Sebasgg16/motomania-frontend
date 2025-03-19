import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, subscribeOn } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verifyAuthenticateUser().pipe(
    map( isAuthenticated => {
      console.log( 'noAuthGuard', isAuthenticated );

      /** Si NO esta autenticado */
      if ( ! isAuthenticated ) {
        router.navigate([ '/login' ]);  
        return false;                   
      }

      return true;                      
    }),
    catchError(( error ) => {
      console.error( error );
      router.navigate(['/']);          
      return [ false ];               
    })
  );
};

