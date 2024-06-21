import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  myForm = new FormControl('');
  
  myWeather: any;

  temperature: number = 0; 
  feels_like: number = 0; 
  high: number = 0;
  low: number = 0; 
  city: string = ""; 
  country: string = ""; 

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeatherData("Boston");
  }

  search() {
    const searchCity = this.myForm.value;
    this.loadWeatherData(searchCity); 
  }

  loadWeatherData(searchCity: string) {
    this.weatherService.getWeather(searchCity).subscribe({
      next: (res) => {
        this.myWeather = res; 
        console.log(this.myWeather);

        this.temperature = this.myWeather.main.temp; 
        this.feels_like = this.myWeather.main.feels_like;
        this.high = this.myWeather.main.temp_max;
        this.low = this.myWeather.main.temp_min;
        this.city = this.myWeather.name;
        this.country = this.myWeather.sys.country; 
      },
      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }

}
