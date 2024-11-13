import { Component, OnInit } from '@angular/core';
import { CityService } from '../../dados/city.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  cidadeInput: string = '';
  cidadeSelecionada: any = null;
  cities: any[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    // Carrega todas as cidades do JSON
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  buscarCidade(): void {
    // Filtra a cidade pelo código ou nome digitado no input
    this.cidadeSelecionada = this.cities.find(cidade =>
      cidade.codigo.toLowerCase() === this.cidadeInput.toLowerCase() ||
      cidade.nome.toLowerCase() === this.cidadeInput.toLowerCase()
    );

    // Limpa o campo de entrada
    this.cidadeInput = '';
  }
}
