import { Component, OnInit } from '@angular/core';
import { WeatherRequestService } from 'src/app/services/weather-request.service';
import { CityRequestService } from 'src/app/services/city-request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myObservableWeather$: any;
  myObservableCity$: any;
  dataWeather: any;
  dataCity: any;
  queryCity!: string;
  

  constructor(private weatherRqst: WeatherRequestService, private cityRqst: CityRequestService) {}

  ngOnInit(): void {}

  getCoorCity() {
    
    this.myObservableCity$ = this.cityRqst.getCity(`${this.queryCity}`).subscribe((dataApi) => {
      console.log(dataApi);
      this.dataCity = dataApi;
      if (this.dataCity) {
        this.findWeather();
      }
    });
  }

  findWeather() { 

    this.myObservableWeather$ = this.weatherRqst.getWeather(this.dataCity[0].lat, this.dataCity[0].lon).subscribe((dataApi) => {
      console.log(dataApi);
      this.dataWeather = dataApi;  
    })
  }

}
