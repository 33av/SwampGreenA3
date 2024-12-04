import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

export interface PeriodicElement {
  name: string | undefined;
  position: number | undefined;
  ranking: number | undefined;
  symbol: string | undefined;
}

@Component({
  selector: 'app-awards-page',
  standalone: true,
  imports: [MatTableModule, CommonModule, HttpClientModule],
  templateUrl: './awards-page.component.html',
  styleUrl: './awards-page.component.css'
})
export class AwardsPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'ranking'];
  dataSource: PeriodicElement[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PeriodicElement[]>('/assets/dados/dadosUsers.json').subscribe(data => {
      this.dataSource = data;
    });
  }
}
