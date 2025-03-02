import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private apiKey = '215dd60343c5d0c55af57ac2e20b74ac'; // Reemplázala con tu clave de OpenWeather
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  obtenerClima(ciudad: string): Observable<any> {
    const url = `${this.apiUrl}?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`;
    return this.http.get(url);
  }
}
