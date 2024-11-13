import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  cpf: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private authService: AuthService) {}

  storeCredentials() {
    // Aqui você chama o AuthService para armazenar as credenciais
    this.authService.storeCredentials(this.email, this.password, this.name);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  formatCPF() {
    let cleaned = this.cpf.replace(/\D/g, '');
    if (cleaned.length > 11) {
      cleaned = cleaned.substring(0, 11);
    }
    this.cpf = cleaned.replace(/(\d{3})(\d)/, '$1.$2')
                      .replace(/(\d{3})(\d)/, '$1.$2')
                      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const key = event.key;
    if (!/^[0-9]$/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Delete') {
      event.preventDefault();
    }
  }

  validateForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.email === '') {
      alert('O campo de email não pode estar vazio.');
    } else if (!emailPattern.test(this.email)) {
      alert('Por favor, insira um email válido.');
    } else if (this.password === '') {
      alert('O campo de senha não pode estar vazio.');
    } else if (this.confirmPassword === '') {
      alert('O campo de confirmação de senha não pode estar vazio.');
    } else if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
    } else if (this.cpf === '') {
      alert('O campo de CPF não pode estar vazio.');
    } else {
      this.validateCPF();
    }
  }

  validateCPF() {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!this.cpf.match(cpfPattern)) {
      alert('Por favor, insira um CPF válido (no formato 000.000.000-00).');
      return;
    }

    const cpfNumbers = this.cpf.replace(/\D/g, '');
    if (!this.isCPFValid(cpfNumbers)) {
      alert('CPF inválido!');
    } else {
      this.storeCredentials();
    }
  }

  isCPFValid(cpf: string): boolean {
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
