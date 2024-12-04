import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getLoggedInUser()) {
      return true;
    } else {
      // Redireciona o usuário para a página de cadastro se não estiver logado
      this.router.navigate(['/login']);
      return false;
    }
  }
}