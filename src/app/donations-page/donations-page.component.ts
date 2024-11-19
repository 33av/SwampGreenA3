import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donations-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donations-page.component.html',
  styleUrls: ['./donations-page.component.css']
})
export class DonationsPageComponent {
  // Lista de instituições fictícias
  instituicoes: string[] = [
    'Ogre Hearts Foundation', 'Fiona Hope', 'Donkey Dream Project', 'Shreks Green Gift', 
    'Farquaads Fairness Fund', 'Dragons Wings Charity', 'Puss in Boots Paws for a Cause', 
    'The Swamp Sanctuary'
  ];

  // Variáveis para controlar o estado da lista e a instituição selecionada
  isDropdownOpen: boolean = false;
  selectedInstituicao: string | null = null;
  doacaoValor: number | null = null; // Valor da doação
  isPopupVisible: boolean = false; // Controle de visibilidade do popup

  // Função para alternar a exibição da lista
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Função para selecionar a instituição
  selectInstituicao(instituicao: string): void {
    this.selectedInstituicao = instituicao;
    this.isDropdownOpen = false; // Fecha a lista após selecionar
  }

  // Função para mostrar o popup de confirmação
  fazerDoacao(): void {
    if (this.selectedInstituicao && this.doacaoValor && this.doacaoValor > 0) {
      this.isPopupVisible = true; // Exibe o popup
    } else {
      alert('Por favor, insira um valor válido para a doação.');
    }
  }

  // Função para confirmar a doação
  confirmarDoacao(): void {
    if (this.selectedInstituicao && this.doacaoValor) {
      alert(`Você fez uma doação de R$${this.doacaoValor} para: ${this.selectedInstituicao}`);
      this.isPopupVisible = false; // Fecha o popup
      this.resetarDoacao(); // Reseta os valores
    }
  }

  // Função para cancelar a doação
  cancelarDoacao(): void {
    this.isPopupVisible = false; // Fecha o popup
    alert(' Você cancelou sua doação, 3 burros órfãos acabaram de partir pro além . ')
  }

  // Função para resetar a doação
  resetarDoacao(): void {
    this.selectedInstituicao = null;
    this.doacaoValor = null;
  }
}
