// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // O serviço estará disponível globalmente
})
export class AuthService {

  constructor() {}

  storeCredentials(email: string, password: string, name: string) {
    // Verifique se as credenciais já estão armazenadas antes de salvar
    if (localStorage.getItem('email') === email) {
      alert('Esse email já foi cadastrado.');
      return;
    }
    localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('userName', name);
  this.setLoggedInUser(name);  // Definindo o nome como usuário logado
  alert('Cadastro realizado com sucesso!');
}


setLoggedInUser(name: string) {
  localStorage.setItem('loggedInUser', name);
}

clearLoggedInUser() {
  localStorage.removeItem('loggedInUser');
}

getLoggedInUser(): string | null {
  if (typeof window !== 'undefined') { // Verifica se está no ambiente do navegador
    return localStorage.getItem('userName');
  }
  return null;
}


  login(email: string, password: string): boolean {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail === email && storedPassword === password) {
      return true;
    } else {
      alert('Email ou senha inválidos.');
      return false;
    }
  }



  isEmailAlreadyRegistered(email: string): boolean {
    return localStorage.getItem('email') === email;
  }

 
  isCPFValid(cpf: string): boolean {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf.match(cpfPattern)) {
      alert('Por favor, insira um CPF válido (no formato 000.000.000-00).');
      return false;
    }
    return this.isCPFChecksumValid(cpf.replace(/\D/g, ''));
  }

  private isCPFChecksumValid(cpf: string): boolean {
    let sum = 0;
    let remainder: number;

    if (cpf === '00000000000') return false;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
  }
}
