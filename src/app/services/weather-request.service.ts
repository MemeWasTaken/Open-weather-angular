import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from 'apiKey.json'

@Injectable({
  providedIn: 'root'
})
export class WeatherRequestService {
  
  constructor(private http:HttpClient) {}

  getWeather(lat:unknown, lon:unknown): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey.value}`)
  }
}
