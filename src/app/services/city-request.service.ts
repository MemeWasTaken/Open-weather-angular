import { ApplicationInitStatus, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from 'apiKey.json'


@Injectable({
  providedIn: 'root'
})
export class CityRequestService {

  constructor(private http: HttpClient) {}

  getCity(city:string) {
    return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey.value}`)
  }
}

