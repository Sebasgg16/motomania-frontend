import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const noAuthGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
   const router = inject(Router);
 
   return authService.verifyAuthenticateUser().pipe(
     map( (isAuth) => {
       console.log( 'noAuthGuard', isAuth );
 
       if ( isAuth ) {
         router.navigate([ '/dashboard' ]);  
         return false;                   
       }
 
       return true;                      
     }),
     catchError(( err ) => {
       console.error( err );
       return of ( false ); ;               
     })
   );
};
