import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authUser: any
  constructor(

    private authservice: AuthService,
    private router: Router
  ) { 
    this.authUser= JSON.parse(localStorage.getItem('authUser') ?? '')
    this.user
     console.log(this.authUser.role);
  }

  get user() {
    return this.authservice.user;
  }

  logout($event: any) {
    $event.preventDefault();

    this.authservice.logoutUser().subscribe({
      next: (data) => {
        console.log(data);

        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Se ejecuta el Logout');
      }
    });
  }
}


