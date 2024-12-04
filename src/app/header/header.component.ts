import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string | null = null;

  constructor(private router: Router, private authService: AuthService) {
    this.userName = this.authService.getLoggedInUser();
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}