import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string, isMetric: boolean) {
    let units: string = (isMetric) ? "metric" : "imperial"; 
    let url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=b36cf0bf23567e529193588df2c9d4ff`; 
    return this.http.get(url);
  }
}
