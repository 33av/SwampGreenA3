import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TextInfoComponent } from './text-info/text-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TextInfoComponent, SearchBarComponent, LoginPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  title = 'Swamp Green';
  constructor(public router: Router) {}
}
