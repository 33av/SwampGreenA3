import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private dataUrl = 'dados/cities.json'; // caminho para o arquivo JSON

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
