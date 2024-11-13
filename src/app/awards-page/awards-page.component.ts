import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
export interface PeriodicElement {
  name: string;
  position: number;
  ranking: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gabriel33av', ranking: 1.0079, symbol: 'H'},
  {position: 2, name: 'PedroSoares', ranking: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lucas Santos', ranking: 6.941, symbol: 'Li'},
  {position: 4, name: 'joaozin_favelaVence', ranking: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', ranking: 10.811, symbol: 'B'},
  {position: 6, name: 'zeDeliver', ranking: 12.0107, symbol: 'C'},
  {position: 7, name: 'Una', ranking: 14.0067, symbol: 'N'},
  {position: 8, name: 'VictorProfessor', ranking: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', ranking: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', ranking: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-awards-page',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './awards-page.component.html',
  styleUrl: './awards-page.component.css'
})
export class AwardsPageComponent {
  displayedColumns: string[] = ['position', 'name', 'ranking'];
  dataSource = ELEMENT_DATA;
}
