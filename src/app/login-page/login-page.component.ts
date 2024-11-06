import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html', 
  styleUrls: ['./login-page.component.css'] // Corrigido para styleUrls
})
export class LoginPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // Novo campo para confirmar a senha
  cpf: string = ''; // Novo campo para CPF
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  
  constructor() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Alterna a visibilidade da senha
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword; // Alterna a visibilidade da confirmação da senha
  }

  formatCPF() {
    // Remove todos os caracteres que não são dígitos
    let cleaned = this.cpf.replace(/\D/g, '');
    
    // Aplica a máscara de formatação
    if (cleaned.length > 11) {
      cleaned = cleaned.substring(0, 11); // Limita a 11 dígitos
    }
    this.cpf = cleaned.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
                      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
                      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
  }


  allowOnlyNumbers(event: KeyboardEvent) {
    const key = event.key;
    // Permite somente números e algumas teclas especiais
    if (!/^[0-9]$/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Delete') {
      event.preventDefault(); // Impede a digitação de qualquer outro caractere
    }
  }



  validateForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validação de email
    if (this.email === '') {
      alert('O campo de email não pode estar vazio.');
    } else if (!emailPattern.test(this.email)) {
      alert('Por favor, insira um email válido.');
    } else if (this.password === '') {
      alert('O campo de senha não pode estar vazio.');
    } else if (this.confirmPassword === '') {
      alert('O campo de confirmação de senha não pode estar vazio.');
    } else if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.'); // Validação das senhas
    } else if (this.cpf === '') {
      alert('O campo de CPF não pode estar vazio.');
    } else {
      this.validateCPF(); // Chama a validação do CPF
    }
  }

  validateCPF() {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Regex para validar CPF formatado
    if (!this.cpf.match(cpfPattern)) {
      alert('Por favor, insira um CPF válido (no formato 000.000.000-00).');
      return; // Retorna imediatamente se o CPF não for válido
    }

    // Validação de CPF (Simples)
    const cpfNumbers = this.cpf.replace(/\D/g, ''); // Remove a formatação para a validação
    if (!this.isCPFValid(cpfNumbers)) {
      alert('CPF inválido!');
    } else {
      // alert('CPF válido!'); // Retorna um alerta se o CPF for válido
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

  storeCredentials() {
      //Verifica se o email já está cadastrado
      if (localStorage.getItem('email')===this.email){ 
      alert('Esse email já foi cadastrado.');
    return; // Sai do método
     }

    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password); // É recomendado usar técnicas de segurança para senhas
    alert('Cadastro Realizado Com Sucesso !');
}


}

