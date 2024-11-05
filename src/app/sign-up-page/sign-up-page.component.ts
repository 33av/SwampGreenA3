import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css', '../login-page/login-page.component.css']
})
export class SignUpPageComponent {
  
  constructor(private router: Router) { };
  navigateToDestino() {
    this.router.navigate(['/login']);
  }

}
