// src/app/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { LoginPageComponent } from '../login-page/login-page.component'; // Importe o LoginPageComponent

@NgModule({
  declarations: [
    // LoginPageComponent, // Declare o LoginPageComponent aqui
  ],
  imports: [
    CommonModule,
    FormsModule, // Adicione FormsModule aqui
  ],
  providers: [],
  // exports: [LoginPageComponent] // Se necessário, exporte o componente
})
export class AuthModule { }
