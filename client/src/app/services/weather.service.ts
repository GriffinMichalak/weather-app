import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    let url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b36cf0bf23567e529193588df2c9d4ff`; 
    return this.http.get(url);
  }
}
