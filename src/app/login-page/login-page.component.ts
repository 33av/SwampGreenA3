import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../sign-up-page/sign-up-page.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router) { };
  navigateToDestino() {
    this.router.navigate(['/signup']);
  }

}
