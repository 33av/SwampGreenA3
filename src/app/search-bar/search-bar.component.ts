import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importando CommonModule

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule], // Incluindo CommonModule nas importações
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  city: string = ""; // Variável para armazenar o nome da cidade
  metadelinkMaps1: string = "https://www.google.com/maps/embed/v1/search?q=reciclagem+"; // Partido em duas partes para concatenar o link com o valor inserido
  metadelinkMaps2: string = "&key=AIzaSyAAuLSTzzDya-CXz41pT_ST2RQww9imIuA";
  linkMapsCompleto: SafeResourceUrl = ""; // Declara como SafeResourceUrl
  searchMade: boolean = false; // Variável para controlar o estado da pesquisa

  constructor(private sanitizer: DomSanitizer) {} // Injeta o serviço DomSanitizer

  // Define a função dentro do componente
  searchRecyclingCenters(): void {
    const searchBar = document.getElementById('search-bar') as HTMLInputElement;
    const query: string = searchBar.value.trim();

    if (query) {
      this.city = query; // Atribui a busca da query na city
      alert(`Buscando centros de reciclagem em: ${query}`);
      this.linkMapsCompleto = this.sanitizer.bypassSecurityTrustResourceUrl(this.metadelinkMaps1 + this.city + this.metadelinkMaps2);
      this.searchMade = true; // Marca que a pesquisa foi feita
    } else {
      alert("Por favor, digite uma cidade ou estado.");
    }
  }
}
